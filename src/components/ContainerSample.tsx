// Containerは赤背景のボックスの中にタイトルと子要素を表示
const Container = (props: { title: string; children: React.ReactElement }) => {
    const { title, children } = props

    return (
        <div style={{background: 'red'}}>
            <span>{title}</span>
            {/* propsのchildrenを埋め込むと、要素を表示 */}
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return (
        // Containerを使用する際にほかの要素を囲って使用する
        <Container title="Hello">
            <p>この部分が背景色で囲まれます</p>
        </Container>
    )
}

export default Parent