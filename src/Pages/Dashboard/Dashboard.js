import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import AddAProduct from '../AddAProduct/AddAProduct';
import CustomerReview from '../CustomerReview/CustomerReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import Pay from '../Pay/Pay';
import './Dashboard.css';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, handleLogout } = useAuth();


    return (
        <div className='bg'>
            <h3 className="text-white fw-bold m-3">Dashboard</h3>
            <div className="row gx-5">
                <div className="col-6 col-md-4 mx-auto mb-5 pb-5" id="sidebar">

                    <p className="text-white text-start">Dashboard</p>
                    {
                        admin ? <div>
                            <Link to={`${url}/makeAdmin`}>
                                <button className='mt-3 btn btn-dark'>
                                    Make Admin
                                </button><br />
                            </Link>
                            <Link to={`${url}/addProducts`}>
                                <button className='mt-3 btn btn-dark'>
                                    Add A Products
                                </button><br />
                            </Link>
                            <Link to={`${url}/manageAllOrders`}>
                                <button className='mt-3 btn btn-dark'>
                                    Manage All Orders
                                </button><br />
                            </Link>
                            <Link to={`${url}/manageProduct`}>
                                <button className='mt-3 btn btn-dark'>
                                    Manage Products
                                </button><br />
                            </Link>
                        </div> :
                            <div>

                                <Link to={`${url}/pay`}>
                                    <button className='mt-3 btn btn-dark'>
                                        Pay
                                    </button><br />
                                </Link>
                                <Link to={`${url}/myOrders`}>
                                    <button className='mt-3 btn btn-dark'>
                                        MyOrders
                                    </button><br />
                                </Link>
                                <Link to={`${url}/customerReview`}>
                                    <button className='mt-3 btn btn-dark'>
                                        Review
                                    </button><br />
                                </Link>
                            </div>

                    }



                    {
                        user?.email &&
                        <button className="btn btn-warning mt-3 m-3" onClick={handleLogout}>Log out</button>
                    }


                </div>
                <div className="col-12 col-md-8 mx-auto ">
                    <Switch>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <Route path={`${path}/myOrders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/customerReview`}>
                            <CustomerReview></CustomerReview>
                        </Route>
                        <Route path={`${path}/makeAdmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>
                        <Route path={`${path}/manageAllOrders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </Route>
                        <Route path={`${path}/addProducts`}>
                            <AddAProduct></AddAProduct>
                        </Route>
                        <Route path={`${path}/manageProduct`}>
                            <ManageProducts></ManageProducts>
                        </Route>
                    </Switch>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;