import { RedirectButton } from './RedirectButton'
import { Paths } from '../routes/paths'

export const Sidebar = () => {
  return (
    <>
      <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Zadania'} />
      <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Grupy'} />
    </>
  )
}
