import React from "react";
import { Pagination , PaginationItem} from '@material-ui/lab'
import useStyles from './pagination.styles'
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";

import { getPosts } from "../actions/posts.actions";

const Paginate = ({ page }) => {
    const { numberOfPages } = useSelector((state)=> state.posts)
    const classes = useStyles()
    const dispatch = useDispatch()

    
    useEffect(()=>{ 
        if (page) dispatch(getPosts(page))
    },[page])


    return (
        <Pagination
            classes={{ ul: classes.ul }}
            count={numberOfPages}
            page={ Number(page) || 1 }
            variant='outlined'
            color='primary'
            renderItem = {((item)=>(
                <PaginationItem {...item } component={<Link />} to={`/posts?pages=${item.page}`} />
            ))}
        />
    )
}

export default Paginate;

