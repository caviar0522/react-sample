// クリックするとアラートを表示
const Hello = () => {
    const onClick = () => {
        alert('Hello!!!!!!')
    }
    const text = 'Hello, React'

    // textを子要素に持つdiv要素を返す
    return (
        // divのonClickにクリック時のコールバック関数を渡す
        <div onClick={onClick}>
            {text}
        </div>
    )
}

// 外部からHelloを呼び出せるようにexport
export default Hello