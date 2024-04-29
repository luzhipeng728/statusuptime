const config = {
  // Your locale for server-side callback. (client-side will always follow browser settings)
  dateLocale: 'zh-CN',
  // Your timezone for server-side callback. (client-side will always follow browser settings)
  timezone: 'Asia/Shanghai',
  page: {
    // Title for your status page
    title: "Chatify's Status",
    // Links shown at the header of your status page, could set `highlight` to `true`
    links: [
      { link: 'https://github.com/lyc8503', label: 'GitHub' },
      { link: 'https://blog.lyc8503.site/', label: 'Blog' },
      { link: '402087139@qq.com', label: 'Email Me', highlight: true },
    ],
  },
  callback: async (statusChangeMsg: string) => {
  },
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
     {
      // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
      id: 'azure-output',
      // `name` 在状态页面和回调消息中使用
      name: 'Azure gpt-4-turbo',
      // `method` 应该是有效的 HTTP 方法
      method: 'POST',
      // `target` 是有效的 URL
      target: 'https://azure-output.chatify.me/v1/chat/completions',
      // [可选] `tooltip` 仅在状态页面上显示工具提示
      tooltip: 'Azure OpenAI 服务状态',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
      timeout: 20000,
      // [可选] 要发送的标头
      headers: {
        "Authorization": "Bearer sk-aMrsHyOc4z9WGwM22fC04cD19eCa49Ce841fF0AaDd6801Df",
        "Editor-Version": "vscode/1.83.0",
        "Content-Type": "application/json"
      },
      // [可选] 要发送的正文
      body: '{"messages":[{"role":"user","content":"Only say test"}],"model":"gpt-4-1106-preview","temperature":0.7,"stream":false}',
      // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
      // responseKeyword: 'success',
    },
    {
     // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
     id: 'openai-output',
     // `name` 在状态页面和回调消息中使用
     name: 'OpenAI gpt-4-turbo',
     // `method` 应该是有效的 HTTP 方法
     method: 'POST',
     // `target` 是有效的 URL
     target: 'http://195.35.36.189:3000/v1/chat/completions',
     // [可选] `tooltip` 仅在状态页面上显示工具提示
     tooltip: 'OpenAI API 服务状态',
     // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
     expectedCodes: [200],
     // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
     timeout: 20000,
     // [可选] 要发送的标头
     headers: {
       "Authorization": "Bearer sk-yq2dQv8w8hXSawBP36A49089Ff204bCc839cD9C9E2268f93",
       "Editor-Version": "vscode/1.83.0",
       "Content-Type": "application/json"
     },
     // [可选] 要发送的正文
     body: '{"messages":[{"role":"user","content":"Only say test"}],"model":"gpt-4-turbo","temperature":0.7,"stream":false}',
     // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
     // responseKeyword: 'success',
   },
    {
      // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
      id: 'channel-1',
      // `name` 在状态页面和回调消息中使用
      name: 'channel-1 gpt-4-turbo',
      // `method` 应该是有效的 HTTP 方法
      method: 'POST',
      // `target` 是有效的 URL
      target: 'https://zen4s.zeabur.app/v1/chat/completions',
      // [可选] `tooltip` 仅在状态页面上显示工具提示
      tooltip: 'Channel-1 gpt-4-turbo 服务状态',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
      timeout: 10000,
      // [可选] 要发送的标头
      headers: {
        "Authorization": "Bearer sk-KoeY6ZWovGNeFHFhB51260172c7849C2BeDeF437De2dB4Ea",
        "Editor-Version": "vscode/1.83.0",
        "Content-Type": "application/json"
      },
      
      // [可选] 要发送的正文
      body: '{"messages":[{"role":"user","content":"Only say test"}],"model":"gpt-4-1106-prebiew","temperature":0.7,"stream":false}',
      // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
      // responseKeyword: 'success',
    },
    {
      // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
      id: 'channel-2',
      // `name` 在状态页面和回调消息中使用
      name: 'Channel-2 gpt-4-turbo',
      // `method` 应该是有效的 HTTP 方法
      method: 'POST',
      // `target` 是有效的 URL
      target: 'https://api.open2closeai.com/v1/chat/completions',
      // [可选] `tooltip` 仅在状态页面上显示工具提示
      tooltip: 'Channel-2 gpt-4-turbo 服务状态',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
      timeout: 10000,
      // [可选] 要发送的标头
      headers: {
        "Authorization": "Bearer sk-m84PoL57dKslzNML90Ea0fF5E6024cCd81749347F6Fa3eD6",
        "Editor-Version": "vscode/1.83.0",
        "Content-Type": "application/json"
      },
      
      // [可选] 要发送的正文
      body: '{"messages":[{"role":"user","content":"Only say test"}],"model":"gpt-4-1106-preview","temperature":0.7,"stream":false}',
      // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
      // responseKeyword: 'success',
    },
    // 示例 TCP 监控项
    {
      id: 'uk_tcp_monitor',
      name: '美国服务器状态',
      // `method` 对于 TCP 监控项应该是 `TCP_PING`
      method: 'TCP_PING',
      // `target` 对于 TCP 监控项应该是 `host:port`
      target: '195.35.36.189:22',
      tooltip: '美国服务',
      timeout: 6000,
    },
    {
      id: 'singapore_tcp_monitor',
      name: '新加坡服务器状态',
      // `method` 对于 TCP 监控项应该是 `TCP_PING`
      method: 'TCP_PING',
      // `target` 对于 TCP 监控项应该是 `host:port`
      target: '194.233.67.246:22',
      tooltip: '美国服务',
      timeout: 6000,
    }
  ],
}

// Don't forget this, otherwise compilation fails.
export default config
