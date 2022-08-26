import { collection as fy3_17_collection } from "../data/nintendo/Nintendo-FY3-2017/mst-fy3-17";
import { collection as fy3_18_collection } from "../data/nintendo/Nintendo-FY3-2018/mst-fy3-18";
import { collection as fy3_19_collection } from "../data/nintendo/Nintendo-FY3-2019/mst-fy3-19";
import { collection as fy3_20_collection } from "../data/nintendo/Nintendo-FY3-2020/mst-fy3-20";
import { collection as fy3_21_collection } from "../data/nintendo/Nintendo-FY3-2021/mst-fy3-21";
import { collection as fy3_22_collection } from "../data/nintendo/Nintendo-FY3-2022/mst-fy3-22";

test("mapping and filtering one title...", () => {

    const totalCollection = [
        fy3_17_collection,
        fy3_18_collection,
        fy3_19_collection,
        fy3_20_collection,
        fy3_21_collection,
        fy3_22_collection,
    ] as const;

    const filteredCollection = totalCollection.map((elem, index, array) => {
        return elem.filter((secondElem, secondIndex, secondArray) => {
            return array[index][0][0].title === " Super Mario Party "
        })
    })

    console.log(filteredCollection);
    
})