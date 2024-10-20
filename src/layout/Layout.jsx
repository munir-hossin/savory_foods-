
import { useEffect, useState } from "react";
import Gallery from "../section/gallery/gallery";
import Header from "../section/header/Header";
import axios from "axios";

function Layout() {
    let [data, setData] = useState([]);
    let [searchText, setSearchText] = useState("");

    useEffect(() => {
        async function getData() {
            let galleryData = await axios.get("https://course.divinecoder.com/food/random/12");
            setData(galleryData.data);
        }

        getData();
    }, []);

    let ascendingHandler = () => {
        setData((item) => {
            return item.toSorted((a, b) => a.name.localeCompare(b.name));
        });
    };

    let descendingHandler = () => {
        let updateData = data.toSorted((a, b) => b.name.localeCompare(a.name));
        setData(updateData);
    };

    // let searchHandler = (text) => {
    //   setSearchText(text);
    // }

    // console.log(data);

    return (
        <div>
            <div className="w-full pb-8 min-h-screen bg-slate-300 pt-16">
                <div className="max-w-6xl m-auto bg-white p-5 rounded shadow">
                    <Header onSearch={(text) => setSearchText(text)} onAscending={ascendingHandler} onDescending={descendingHandler} />

                    {data.length == 0 ? (
                        <div className="w-full h-screen flex justify-center items-center">
                            <span className="loading loading-infinity loading-lg"></span>
                            {/* <span className="loading loading-spinner loading-lg"></span> */}
                        </div>
                    ) : (
                        <Gallery
                            galleryItemData={data.filter((item) => {
                                return item.name.toLowerCase().includes(searchText.toLocaleLowerCase());
                            })}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Layout;
