import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

export interface TokenData {
  access_token: string;
  refresh_token: string;
  id_token?: string;
  sso_token?: string;
  token_type: string;
  expires_in: number;
  updated_at: string;
  expires_at: string;
  is_new_user?: boolean;
  is_mobile_verified?: boolean;
  mfa_factors?: any[];
  account_restored?: boolean;
}

export interface TokenStorage {
  [client_id: string]: TokenData;
}

export class TokenManager {
  private tokenFilePath: string;

  constructor() {
    this.tokenFilePath = join(process.cwd(), 'tokens', 'auth_tokens.json');
  }

  // 读取所有tokens
  readTokens(): TokenStorage {
    try {
      if (existsSync(this.tokenFilePath)) {
        const fileContent = readFileSync(this.tokenFilePath, 'utf8');
        return JSON.parse(fileContent);
      }
    } catch (error) {
      console.error('Error reading tokens:', error);
    }
    return {};
  }

  // 保存tokens
  saveTokens(tokens: TokenStorage): void {
    try {
      // 确保目录存在
      const tokenDir = join(process.cwd(), 'tokens');
      if (!existsSync(tokenDir)) {
        require('fs').mkdirSync(tokenDir, { recursive: true });
      }

      writeFileSync(this.tokenFilePath, JSON.stringify(tokens, null, 2));
      console.log('Tokens saved to:', this.tokenFilePath);
    } catch (error) {
      console.error('Error saving tokens:', error);
      throw error;
    }
  }

  // 获取特定client的token
  getToken(client_id: string): TokenData | null {
    const tokens = this.readTokens();
    return tokens[client_id] || null;
  }

  // 保存或更新特定client的token
  saveToken(client_id: string, tokenData: Partial<TokenData>): void {
    const tokens = this.readTokens();
    
    tokens[client_id] = {
      ...tokens[client_id],
      ...tokenData,
      updated_at: new Date().toISOString(),
      expires_at: new Date(Date.now() + (tokenData.expires_in || 86400) * 1000).toISOString()
    } as TokenData;
    
    this.saveTokens(tokens);
  }

  // 检查token是否过期
  isTokenExpired(client_id: string): boolean {
    const token = this.getToken(client_id);
    if (!token) return true;
    
    return new Date() > new Date(token.expires_at);
  }

  // 删除过期的tokens
  cleanExpiredTokens(): void {
    const tokens = this.readTokens();
    const now = new Date();
    
    const validTokens: TokenStorage = {};
    for (const [client_id, token] of Object.entries(tokens)) {
      if (new Date(token.expires_at) > now) {
        validTokens[client_id] = token;
      }
    }
    
    this.saveTokens(validTokens);
    console.log('Cleaned expired tokens');
  }

  // 删除特定client的token
  deleteToken(client_id: string): void {
    const tokens = this.readTokens();
    delete tokens[client_id];
    this.saveTokens(tokens);
  }
}

export const tokenManager = new TokenManager();
