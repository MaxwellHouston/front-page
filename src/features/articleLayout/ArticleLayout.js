import React, { useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";


export const ArticleLayout = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);


    return (
        <div>
            {/* Map out article */}
        </div>
    )
}