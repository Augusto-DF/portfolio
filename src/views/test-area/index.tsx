import Arise from "@components/animated/arise"

const TestArea = () => {
  return (
    <div style={style}>
        <Arise><div style={squireTarget()} /></ Arise>
        <div style={squireTarget("#6f85c1ff")}></div>
    </div>
  )
}

const squireTarget = (color = "#d089dcff") => ({
    width: "65px",
    height: "65px",
    backgroundColor: color,
    borderRadius: "8px"
})

// #d4476ff

const style = {
    width: "100vw",
    height: "80vh",
    backgroundColor: "#e0e0e0",
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    gap: "16px"
}

export default TestArea