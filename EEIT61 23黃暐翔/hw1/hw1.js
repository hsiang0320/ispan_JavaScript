document.write("<table>");
for (let i = 1; i <= 9; i++) {
    document.write("<tr>");
    for (let j = 2; j <= 9; j++) {
        document.write(`<td>${j}*${i}=${j*i}</td>`);
    }
    document.write("</tr>");
}
document.write("</table>");



