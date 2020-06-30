import React from 'react';
// 名前あり
// 1ファイルに複数モジュール
export function Foo() {
    return(
        <h2>Foo</h2>
    )
}
export const Bar = () => {
    return(
        <h2>Bar</h2>
    )
}