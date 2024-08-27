import { QueryClientProvider, QueryClient } from "react-query"
import AppRoutes from "./routes"
import { ConfigProvider } from "antd"
import { themeConfig } from "@config/antd"
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

function App() {
  // Setting Modal、Message、Notification static config.
  // ConfigProvider.config({
  //   prefixCls: "ant",
  //   iconPrefixCls: "anticon",
  //   theme: themeConfig,
  // })

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        theme={themeConfig}>
        <AppRoutes />
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
