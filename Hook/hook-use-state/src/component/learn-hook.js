import React from "react";
export default function App() {
    const [searchWord, setSearchWord] = React.useState('hello')
    //1: State
    const [req, setReq] = React.useState(
        {
            loading: false,
            data: [],
            error: "",
        });

    //3: chay effect
    React.useEffect(() => {
        //3.1 chay noi dung effect
        //console.log("effect");

        //khi goi API: khong biet kq nhu nao (k nhan duoc ket qua =""|| cos nhan ket qua|| error)
        //goi API:
        //Promise: viet nhu bt
        //Async await: tao ra 1 ham, goij ham o duoi
        async function loadData() {
            console.log("rerender")
          try {
            setReq({
                ...req, //copy trang thai cu
                loading: true
            })
            //goi request
            //BAI1
            //const res = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");
            //bai2 button
            const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
            //cap nhat trang thai thanh true

            const data = await res.json();
            //console.log(data)
            //da co data, k loading
            setReq(
                {
                    ...req,//copy trang thai cu
                    loading: false, //chuyen thanh false
                    data: data //data chuyen thanh data
                })
        }

         catch(e){ //
             //console.log(e.response.status == 409);
            console.log(e)
        }
          }

        loadData();
        //[req.loading] value, khong dat trong dependencies list la [], {}
    }, [searchWord]);
    //bai2
    const changeWord = () => {
        setSearchWord("hi")
    }


    //1.component mounting : component nap vao Dom tree lan dau (render lan 1)
    //2.component update : component duoc cap nhat trang thai(State thay doi => component rerender)
    //3.component unmount: component bi xoa khoi Dom tree (khong render nua thong qua trang thais on\off) an button true;false checkboc true thi mo ra
    //3.1: Router thay doi , component se nhay qua url moi, render component moi
    //SPA: single page application 

    //2:chay return

    //4: rerender neu nhu not trong gia tri trong mang dependencies list([]) thay doi
    return (
        // <div>
        // {console.log("render")}
        // <p>12334</p>
        // </div>
        <div>
            { console.log(searchWord) }
            {req.loading && <p>loading</p>}
            {/* {!req.loading && <p>Word: {JSON.stringify(req.data)}</p>} */}
            {
                !req.loading &&
                <ul>
                    {
                        req.data.map((item, index) => (
                            // <p key={item.id}>work item: {item.word}</p>
                            <p key={index}>work: {item.word}</p>
                        ))}
                </ul>
            }
            {/* bai 2: khi an tu hi , word thay doi hello -> hi */}
                <button onClick={() => changeWord()}>Hi</button>
          </div>
        )
}
//69-73 : 0 -1(wnt delete) - 2
//0 - 2(k rerender) //xoa 1  cap nha 2


//1.loading = true, de tranh nguoi dung cho doi
//data= " " du lieu chua co
//2: loading = false, data= "hello" => hien thi tu do ra ngoai

// 1: state
// 2: return
// 3: chay effect "react.useEffect"
// 3.1: chay noi dung effect
// 3.2 kt neu co dependencies[] o cuoi useEffect. thi chay buoc 4
// 4:rerender (neu gia tri trong mang dependencies list{} [] thay doi)

// 1: loading= true de tranh ng dung cho doi
// 2: data = "" || du lieu chua co
// 3: loading = false, data = "hello" = > hien thi tu do ra ngoai
// ==> khi su dung 3.2 [] chi render duy nhat 1 lan mounting va update 
//->1 state->2 reder return->3 useeffect: done useeffect (co state) xong thi return lai
// neu dependence [] xu ly su kien thi check trong dependence co danh sach do khong-> neu co nam trong danh sach thi chay useeffect lan nua