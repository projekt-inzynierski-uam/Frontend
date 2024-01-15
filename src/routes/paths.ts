export const Paths = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  DASHBOARD_PROFIL: '/dashboard/profil',
  DASHBOARD_MAIN: '/dashboard/panel',
  DASHBOARD_GROUPS: '/dashboard/grupy',
  DASHBOARD_INVITES: '/dashboard/zaproszenia',
  DASHBOARD_GROUP_DASHBOARD: '/dashboard/grupy/:id',
  DASHBOARD_GROUP_USERS: '/dashboard/grupy/:id/uzytkownicy',
  DASHBOARD_GROUP_SETTINGS: '/dashboard/grupy/:id/ustawienia',
  DASHBOARD_SETTINGS: '/dashboard/ustawienia/',
  DASHBOARD_OBJECTIVES: '/dashboard/cele',
  DASHBOARD_TASKS: '/dashboard/zadania',
  DASHBOARD_GROUP_TASKS: '/dashboard/grupy/:id/zadania',
  DASHBOARD_GROUP_OBJECTIVES: '/dashboard/grupy/:id/cele',
  DASHBOARD_GROUP_PANEL: '/dashboard/grupy/:id/panel'
} as const
