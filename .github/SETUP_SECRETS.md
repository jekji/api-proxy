# GitHub Secrets 配置指南

## ⚠️ 重要提示
在GitHub Actions能够正常工作之前，你必须先配置以下Secrets。

## 📋 需要配置的Secrets

### 1. SERVER_PORT
**描述**: SSH服务器端口号

**值**:
```
2323
```

**注意**: 如果你的服务器使用默认的22端口，请设置为 `22`

---

### 2. SSH_PRIVATE_KEY
**描述**: 用于连接到Debian服务器的SSH私钥

**获取方法**:
```bash
# 在Debian服务器上执行
ssh-keygen -t ed25519 -C "github-deploy" -f ~/.ssh/github_deploy

# 将公钥添加到authorized_keys
cat ~/.ssh/github_deploy.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys

# 显示私钥内容（需要复制完整内容到GitHub Secrets）
cat ~/.ssh/github_deploy
```

**注意**: 
- 复制**完整的私钥内容**，包括 `-----BEGIN OPENSSH PRIVATE KEY-----` 和 `-----END OPENSSH PRIVATE KEY-----`
- 不要有多余的空格或换行

---

### 3. SERVER_HOST
**描述**: Debian服务器的IP地址或域名

**示例**:
```
123.456.789.0
```
或
```
server.example.com
```

---

### 4. SERVER_USER
**描述**: 服务器上的部署用户名

**推荐值**:
```
deploy
```

**创建部署用户**（如果还没有）:
```bash
# 在Debian服务器上执行
sudo adduser deploy
sudo usermod -aG sudo deploy
```

---

### 5. DEPLOY_PATH
**描述**: 项目在服务器上的部署路径

**示例**:
```
/var/www/bicrypto
```

**创建部署目录**:
```bash
# 在Debian服务器上执行
sudo mkdir -p /var/www/bicrypto
sudo chown -R deploy:deploy /var/www/bicrypto

# 切换到deploy用户并克隆仓库
su - deploy
cd /var/www/bicrypto
git clone git@github.com:jekji/bicrypto.git .
```

---

## 🔧 在GitHub上配置Secrets

### 步骤：

1. **打开仓库设置**
   - 访问: https://github.com/jekji/bicrypto
   - 点击 **Settings** 标签

2. **进入Secrets配置**
   - 左侧菜单选择 **Secrets and variables** → **Actions**

3. **添加每个Secret**
   - 点击 **New repository secret** 按钮
   - 输入 **Name** (必须完全匹配上面列出的名称)
   - 输入 **Value** (对应的值)
   - 点击 **Add secret**

4. **重复步骤3**，添加所有5个secrets：
   - ✅ SERVER_PORT
   - ✅ SSH_PRIVATE_KEY
   - ✅ SERVER_HOST
   - ✅ SERVER_USER
   - ✅ DEPLOY_PATH

---

## ✅ 验证配置

配置完成后，你可以：

1. **手动触发工作流**
   - 进入 **Actions** 标签
   - 选择 **Deploy to Debian Server** 工作流
   - 点击 **Run workflow**

2. **或者推送代码到main分支**
   ```bash
   git add .
   git commit -m "test deployment"
   git push origin main
   ```

3. **查看部署日志**
   - 在 **Actions** 标签中查看工作流执行状态
   - 点击具体的运行记录查看详细日志

---

## 🔒 安全提示

1. **永远不要**将私钥提交到Git仓库
2. **定期轮换** SSH密钥
3. **限制deploy用户权限**，只给予必要的权限
4. **使用防火墙**限制SSH访问
5. **启用SSH密钥登录**，禁用密码登录

---

## 🐛 常见问题

### 问题1: SSH连接被拒绝
```bash
# 在服务器上检查SSH配置
sudo nano /etc/ssh/sshd_config

# 确保以下配置启用：
PubkeyAuthentication yes
AuthorizedKeysFile .ssh/authorized_keys

# 重启SSH服务
sudo systemctl restart sshd
```

### 问题2: 权限被拒绝
```bash
# 检查文件权限
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/github_deploy
```

### 问题3: Git pull失败
```bash
# 确保服务器上配置了Git SSH密钥
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
# 将公钥添加到GitHub账户的SSH keys
```

---

## 📞 需要帮助？

如果遇到问题，请检查：
1. GitHub Actions日志中的详细错误信息
2. 服务器上的系统日志: `sudo journalctl -u sshd -n 50`
3. PM2日志: `pm2 logs`
