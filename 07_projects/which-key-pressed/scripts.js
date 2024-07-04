const enter = document.getElementById('enter')
window.addEventListener('keydown',(e) => {
    enter.innerHTML=`
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>`
})