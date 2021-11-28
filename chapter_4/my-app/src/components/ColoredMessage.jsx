export const ColorMessage = ({color, children}) => {

  const contentStyle = {
    color,  // 省略記法
    fontSize: "20px"
  }

  return <p style={contentStyle}>{children}</p>
}