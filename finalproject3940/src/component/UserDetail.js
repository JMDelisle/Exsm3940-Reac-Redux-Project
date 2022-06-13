import React from 'react';

const UserDetail = ({ user }) => {
    console.log(user.firstName)
    console.log(user.phoneNumber)

    return (
        <li>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><div className="name">{user.firstName}</div></td>
                            <td><div className="phoneNumber">{user.phoneNumber}</div></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </li>
    );
};

export default UserDetail;