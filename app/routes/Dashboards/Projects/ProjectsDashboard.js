import React from 'react';
import faker from 'faker/locale/en_US';
import { Link } from 'react-router-dom';
import {
    Container,
    Row,
    Card,
    CardBody,
    Badge,
    Table,
    CardTitle,
    Button,
    InputGroup,
    InputGroupAddon,
    Input,
    ListGroup,
    ListGroupItem,
    Media,
    Col
} from './../../../components';
import { setupPage } from './../../../components/Layout/setupPage';

import { HeaderMain } from "../../components/HeaderMain";

import {
    TasksMedia
} from "../../components/ProjectsDashboards/TasksMedia";
import {
    TinyDonutChart
} from "../../components/ProjectsDashboards/TinyDonutChart"
import {
    TinyDonutChartAllProjects
} from "../../components/ProjectsDashboards/TinyDonutChartAllProjects"
import {
    TinyDonutChartBig
} from "../../components/Financial/TinyDonutChartBig"
import {
    TimelineMini
} from "../../components/Timeline/TimelineMini"
import { DraggableProjects } from './DraggableProjects';
import ProjectsList from '../../Apps/Projects/ProjectsList';

const ProjectsDashboard = () => (
    <Container>
        <Row>
            <Col lg={ 12 }>
                <HeaderMain 
                    title="You are eligible for..."
                    className="mb-4 mb-lg-4"
                />
            </Col>
        </Row>
        <Row className="mb-5">
            <Col lg={ 3 }>
                <div className="d-flex justify-content-center">
                    <TinyDonutChartAllProjects />
                </div>
            </Col>
            <Col lg={ 9 } className="d-flex align-items-center pl-10">
                <Row className="w-100">
                    <Col lg={ 5 }>
                        <Row className="text-center mt-4 mb-4">
                            <div>
                                <i className="fa fa-circle text-info h3 mr-2"></i>
                                <span className="h3">$35,265 </span><span className="h5 text-body"> in <u>funding.</u></span>
                            </div>
                        </Row>
                        <Row className="text-center mt-4 mb-4">
                            <div>
                                <i className="fa fa-circle text-primary h3 mr-2"></i>
                                <span className="h3">$38,000 </span><span className="h5 text-body"> in <u>tax credits.</u></span>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={ 7 }>
                        <Row className="text-center mt-4 mb-4">
                            <div>
                                <i className="fa fa-circle text-indigo h3 mr-2"></i>
                                <span className="h3">$48,000 </span><span className="h5 text-body"> in <u>loans & investments.</u></span>
                            </div>
                        </Row>
                        <Row className="text-center mt-4 mb-4">
                            <div>
                                <i className="fa fa-circle text-purple h3 mr-2"></i>
                                <span className="h3">$11,000 </span><span className="h5 text-body"> in <u>wage subsidies & interns.</u></span>
                            </div>
                        </Row>
                    </Col>
                </Row>
            </Col>
            {/* <Col lg={ 10 }>
                <Row className="h-100">
                    <Col xs={ 2 } className="text-center my-auto">
                        <p className="text-center mb-0">
                            <i className="fa fa-circle text-success mr-2"></i>
                            Funding
                        </p>
                        <h3 className="mt-2 mb-0">
                            $35,265
                        </h3>
                    </Col>
                    <Col xs={ 3 } className="text-center my-auto">
                        <p className="text-center mb-0">
                            <i className="fa fa-circle text-primary mr-2"></i>
                            Tax Credits
                        </p>
                        <h3 className="mt-2 mb-0">
                            $8,000
                        </h3>
                    </Col>
                    <Col xs={ 3 } className="text-center my-auto">
                        <p className="text-center mb-0">
                            <i className="fa fa-circle text-info mr-2"></i>
                            Loans & Investments
                        </p>
                        <h3 className="mt-2 mb-0">
                            $48,000
                        </h3>
                    </Col>
                    <Col xs={ 3 } className="text-center my-auto">
                        <p className="text-center mb-0">
                            <i className="fa fa-circle text-purple mr-2"></i>
                            Wage Subsidies & Interns
                        </p>
                        <h3 className="mt-2 mb-0">
                            $9,000
                        </h3>
                    </Col>
                </Row>
            </Col> */}
        </Row>
        <Row>
            <Col lg={ 12 }>
                <h3 className="mb-4">
                    We Recommend
                </h3>
            </Col>
        </Row>
        <Row>
            <Col lg= {12}>
                <ProjectsList />
            </Col>
        </Row>
    </Container>
);

export default setupPage({
    pageTitle: 'Projects Dashboard'
})(ProjectsDashboard);