// 無名関数でコンポーネントを定義し、Textという変数に代入する
// Textコンポーネントは,親から'content'というデータを受け取る

const Text = (props: {content: string}) => {
    // propsからcontentというデータを取り出す
    const {content} = props
    // propsで渡されたデータを表示
    return <p className="text">{content}</p>
}

// 同様に定義したコンポーネントをMessageという変数に代入する
const Message = (props: {}) => {
    const content1 = 'This is parent component'
    const content2 = 'Message uses Text component'

    return (
        <div>
            {/* contentというキーでcomponentにデータを渡す */}
            <Text content={content1}/>
            {/* 違うデータを渡すとそのデータが表示される */}
            <Text content={content2}/>
        </div>
    )
}

export default Message