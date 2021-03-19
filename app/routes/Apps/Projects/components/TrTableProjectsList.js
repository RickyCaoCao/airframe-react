import React from 'react';
import faker from 'faker/locale/en_US';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { 
    Badge,
    Progress,
    Avatar,
    UncontrolledButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from './../../../../components';
import { randomAvatar } from './../../../../utilities';

/*eslint-disable */
const status = [
    <Badge pill color="success">
        Active
    </Badge>,
    <Badge pill color="danger">
        Suspended
    </Badge>,
    <Badge pill color="warning">
        Waiting
    </Badge>,
    <Badge pill color="secondary">
        Paused
    </Badge>
];
/*eslint-enable */
/*eslint-disable */
const tasksCompleted = [
    "25",
    "50",
    "70",
    "90"
];
/*eslint-enable */

function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

const TrTableProjectsList = () => (
    <React.Fragment>
        {
            _.times(12, (index) => (
                <tr key={ index }>
                    <td className="align-middle">
                        <p className="text-left mb-0">
                            Up to
                        </p>
                        <h4 className="text-left mt-0 mb-0">
                            ${formatNumber(Math.floor(Math.random(1)*100+1)*100)}
                        </h4>
                    </td>
                    <td className="align-middle">
                        <p className="text-left mb-0">
                            Name of Grant or Program Goes Here
                        </p>
                        <h4 className="text-left mt-2 mb-0">
                            We will include a tagline here to catch people's attention.
                        </h4>
                    </td>
                    <td className="align-middle">
                        { status[0] }
                    </td>
                    <td className="align-middle">
                        <div className="text-inverse">
                            <a href="#">
                                <i className="fa fa-fw fa-lg fa-star-o"></i>
                            </a>
                        </div>
                    </td>
                </tr>
            ))
        }
    </React.Fragment>
)

export { TrTableProjectsList };
