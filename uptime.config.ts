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
      { link: 'mailto:me@lyc8503.site', label: 'Email Me', highlight: true },
    ],
  },
  callback: async (statusChangeMsg: string) => {
    // Write any typescript here
    // Example `statusChangeMsg` string:
    // "❌My Blog went down at 2023/11/18 14:08:59 with error Timeout after 10000ms"
    // "✔️My Blog came back up at 2023/11/18 14:10:48 after 2 minutes of downtime"
    // Example:
    // await fetch('https://api.example.com/callback?msg=' + statusChangeMsg)
  },
  // Define all your monitors here
  monitors: [
    // Example HTTP Monitor
     {
      // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
      id: 'turboapi',
      // `name` 在状态页面和回调消息中使用
      name: 'turboapi.chatify.me',
      // `method` 应该是有效的 HTTP 方法
      method: 'POST',
      // `target` 是有效的 URL
      target: 'https://turboapi.chatify.me/v1/chat/completions',
      // [可选] `tooltip` 仅在状态页面上显示工具提示
      tooltip: 'turboapi.chatify.me 服务状态',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
      timeout: 20000,
      // [可选] 要发送的标头
      headers: {
        "Authorization": "Bearer sk-sidc45Kn95OKgLgA8cE6E44b3cEb4590A4260dFe6436Ae3a",
        "Editor-Version": "vscode/1.83.0",
        "Content-Type": "application/json"
      },
      // [可选] 要发送的正文
      body: '{"messages":[{"role":"user","content":"Say Test"}],"model":"gpt-4","temperature":0.7,"stream":false}',
      // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
      // responseKeyword: 'success',
    },
    {
      // `id` 应该是唯一的，如果 `id` 保持不变，历史记录将被保留
      id: 'foo_monitor',
      // `name` 在状态页面和回调消息中使用
      name: 'provider.chatify.me',
      // `method` 应该是有效的 HTTP 方法
      method: 'POST',
      // `target` 是有效的 URL
      target: 'https://provider.chatify.me/v1/chat/completions',
      // [可选] `tooltip` 仅在状态页面上显示工具提示
      tooltip: '这是此监控项的工具提示',
      // [可选] `expectedCodes` 是可接受的 HTTP 响应代码的数组，如果未指定，默认为 2xx
      expectedCodes: [200],
      // [可选] `timeout`（以毫秒为单位），如果未指定，默认为 10000
      timeout: 10000,
      // [可选] 要发送的标头
      headers: {
        "Authorization": "Bearer sk-8qhaT9fbziscfjiw96838bBeD8254b0d8e9f49Eb83B4523d",
        "Editor-Version": "vscode/1.83.0",
        "Content-Type": "application/json"
      },
      // [可选] 要发送的正文
      body: '{"messages":[{"role":"user","content":"Say Test"}],"model":"gpt-3.5-turbo","temperature":0.7,"stream":false}',
      // [可选] 如果指定，响应必须包含关键字才被视为正常运行。
      // responseKeyword: 'success',
    },
    // 示例 TCP 监控项
    {
      id: 'test_tcp_monitor',
      name: '服务器状态',
      // `method` 对于 TCP 监控项应该是 `TCP_PING`
      method: 'TCP_PING',
      // `target` 对于 TCP 监控项应该是 `host:port`
      target: '195.35.36.189:22',
      tooltip: '美国服务',
      timeout: 6000,
    },
  ],
}

// Don't forget this, otherwise compilation fails.
export default config
