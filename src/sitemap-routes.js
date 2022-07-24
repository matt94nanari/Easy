import React from 'react'
import { Switch, Route } from 'react-router'

export default (
  <Switch>
    <Route exact path="/" />
    <Route exact path="/news/:newsPages" />
    <Route exact path="/technical-corner/:technicalCornerPages" />
    <Route exact path="/privacy-policy" />
    <Route exact path="/csr" />
    <Route exact path="/employee-garden" />
    <Route exact path="/facility" />
    <Route exact path="/production-control-management" />
    <Route exact path="/optical-robot-sorting" />
    <Route exact path="/packing-storage" />
    <Route exact path="/lab-test" />
    <Route exact path="/production-control-management/ppap" />
    <Route exact path="/production-control-management/apqp" />
    <Route exact path="/products" />
    <Route exact path="/about-easylink" />
    <Route exact path="/tooling" />
    <Route exact path="/online-service" />
    <Route exact path="/testimonial" />
    <Route />
  </Switch>
)
