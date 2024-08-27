import { DefaultLayout } from "@components/Layout"
import { trans } from "@/locale"

export const Dashboard = (props: any) => {
  return (
    <DefaultLayout
      {...props}
      loading={false}
      title={trans("menu.dashboard")}>
      <div className="">{trans("menu.dashboard")}</div>
    </DefaultLayout>
  )
}
