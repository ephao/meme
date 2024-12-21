/**
 * This composable function is used to set the page title and meta description for a Nuxt.js application.
 * It takes an optional subtitle and description as parameters.
 * If a subtitle is provided, it appends it to the base title.
 * If no subtitle is provided, it uses the home page title.
 * It also sets the meta description, using a default description if none is provided.
 */
export const usePageTitle = (subtitle?: string, description?: string) => {
  const baseTitle = 'iLoveMeme'
  const homePageTitle = `${baseTitle} ｜ 我爱土狗`
  const baseDescription = '从零开始学习 Web 开发，掌握前端技术栈，完成项目从开发到上线的全过程'

  const title = subtitle
    ? `${subtitle} | ${baseTitle}`
    : homePageTitle

  useHead({
    title,
    meta: [
      {
        name: 'description',
        content: description || baseDescription
      }
    ]
  })

  return {
    title
  }
}
