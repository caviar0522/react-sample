import React from 'react'

// 名前を入力するためのテキストボックスを返す
const Name = () => {
    // input要素のonchangeイベントに対するcallback
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // 入力内容をコンソールに表示
        console.log(e.target.value)
    }

    return (
        // styleオブジェクトのキーはCamelCase
        <div style={{padding: '16px', backgroundColor: 'gray'}}>
            {/* forの代わりにhtmlFor */}
            <label htmlFor="name">名前</label>
            {/* class→className onchange→onChange */}
            <input id='name' className='input-name' type='text' onChange={onChange}/>
        </div>
    )
}

export default Name