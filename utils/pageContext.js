let context = {}

export const bindPageContext = Component => {
  const { getInitialProps } = Component

  Component.getInitialProps = ctx => {
    setPageContext(ctx)

    return getInitialProps ? getInitialProps(ctx) : {}
  }

  return Component
}

export const getPageContext = () => context

export const setPageContext = ctx => {
  context = ctx
}
