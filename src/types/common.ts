export interface IAuthentication {
  username: string
  email: string
  fullname: string
  avatar: string
  gender: string
  birthday: Date
  createdAt: Date
  updatedAt: Date
  config: JSON
}

export interface PageTitleState {
  title: string
  changeTitle: (title: string) => void
}

export interface ICollapse {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
}
