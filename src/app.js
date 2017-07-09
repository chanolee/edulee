$(function () {
    var tableEl = $("table");
    console.log(tableEl);
});

var tableTrTempl = (uni) => `<tr>
                <td>${uni.department}</td>
                <td>${uni.uniName}</td>
                <td>${uni.departmentType}</td>
                <td>${uni.location}</td>
                <td>${uni.type}</td>
            </tr>`;

$(function () {

    var dropdwEl = $("ul.dropdown-menu")
        dropdwEl.on('click', function(e) {
            console.log(e);
            var span = $("#location-btn .caret")
            var targetText = e.target.text;
            var locationNameEl = $("span#location-name");
            locationNameEl.text(e.target.text);
            // dropBtn.text(targetText).append(span);
            //  dropBtn.html(targetText + ' <span class="caret"></span>');

        })
    var uniData = [];
     var tableEl = $("table > tbody");
       //이벤트 바인딩
            tableEl.on('click', function (e) {
                console.log("oh!");
            });

    $.get('https://edulee-12ea1.firebaseio.com/edu.json')
        .then(r => {
            console.log(r);
            for (var key in r) {
                if (r.hasOwnProperty(key)) {
                    var uni = r[key];
                    uniData.push(uni);
                    console.log(uni);
                }
            }

            //Data => Element => 화면에 출력
            uniData
                //.filter(e => e.uniName === "서울대")
                .map(tableTrTempl)
                .forEach(trContent => tableEl.append($(trContent)));

        });
});
