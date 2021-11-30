import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../img/smile.png";
import Preloader from "../common/Preloader";

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    if (props.isFetching) {
        return <Preloader />
    }

    return (
        <div className="usersContent">
            <div>
                {pages.map((pageNumber) => {
                    return <span className={(props.currentPage === pageNumber) ? "selectedPage" : null}
                        onClick={() => { props.onPageChanged(pageNumber) }}>{pageNumber}</span>
                })}
            </div>
            {
                props.users.map((user) => {
                    return (
                        <div>
                            <span>
                                <div>
                                    <NavLink to={"/profile/" + user.id}>
                                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                            className="userPhoto" alt="peper" />
                                    </NavLink>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button disabled={props.followingInProgress.some(id => id == user.id)}
                                            onClick={() => { props.unfollow(user.id) }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id == user.id)}
                                            onClick={() => { props.follow(user.id) }}>Follow</button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default Users;
