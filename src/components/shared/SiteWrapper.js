import * as React from "react";
import { NavLink, withRouter } from "react-router-dom";
import update from "react-addons-update";
import {
  Site,
  Nav,
  Grid,
  List,
  Button,
  RouterContextProvider
} from "tabler-react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../actions";

const navBarItems = [
  {
    value: "Home",
    to: "/",
    icon: "home",
    LinkComponent: withRouter(NavLink),
    useExact: true
  },
  {
    value: "Interface",
    icon: "box",
    subItems: [
      {
        value: "Cards Design",
        to: "/cards",
        LinkComponent: withRouter(NavLink)
      },
      { value: "Charts", to: "/charts", LinkComponent: withRouter(NavLink) },
      {
        value: "Pricing Cards",
        to: "/pricing-cards",
        LinkComponent: withRouter(NavLink)
      }
    ]
  },
  {
    value: "Components",
    icon: "calendar",
    subItems: [
      { value: "Maps", to: "/maps", LinkComponent: withRouter(NavLink) },
      { value: "Icons", to: "/icons", LinkComponent: withRouter(NavLink) },
      { value: "Store", to: "/store", LinkComponent: withRouter(NavLink) },
      { value: "Blog", to: "/blog", LinkComponent: withRouter(NavLink) }
    ]
  },
  {
    value: "Pages",
    icon: "file",
    subItems: [
      { value: "Customer", to: "/customer", LinkComponent: withRouter(NavLink) },
      { value: "Login", to: "/login", LinkComponent: withRouter(NavLink) },
      {
        value: "Register",
        to: "/register",
        LinkComponent: withRouter(NavLink)
      },
      {
        value: "Forgot password",
        to: "/forgot-password",
        LinkComponent: withRouter(NavLink)
      },
      { value: "Product", to: "/product", LinkComponent: withRouter(NavLink) },
      { value: "401 error", to: "/401", LinkComponent: withRouter(NavLink) },
      { value: "403 error", to: "/403", LinkComponent: withRouter(NavLink) },
      { value: "404 error", to: "/404", LinkComponent: withRouter(NavLink) },
      { value: "500 error", to: "/500", LinkComponent: withRouter(NavLink) },
      { value: "503 error", to: "/503", LinkComponent: withRouter(NavLink) },
      { value: "Email", to: "/email", LinkComponent: withRouter(NavLink) },
      {
        value: "Empty page",
        to: "/empty-page",
        LinkComponent: withRouter(NavLink)
      },
      { value: "RTL", to: "/rtl", LinkComponent: withRouter(NavLink) }
    ]
  },
  {
    value: "Forms",
    to: "/form-elements",
    icon: "check-square",
    LinkComponent: withRouter(NavLink)
  },
  {
    value: "Gallery",
    to: "/gallery",
    icon: "image",
    LinkComponent: withRouter(NavLink)
  },
  {
    icon: "file-text",
    value: "Documentation",
    to:
      process.env.NODE_ENV === "production"
        ? "https://tabler.github.io/tabler-react/documentation"
        : "/documentation"
  }
];

class SiteWrapper extends React.Component {
  state = {
    notificationsObjects: [
      {
        unread: true,
        avatarURL: "demo/faces/male/41.jpg",
        message: (
          <React.Fragment>
            <strong>Nathan</strong> pushed new commit: Fix page load performance
            issue.
          </React.Fragment>
        ),
        time: "10 minutes ago"
      },
      {
        unread: true,
        avatarURL: "demo/faces/female/1.jpg",
        message: (
          <React.Fragment>
            <strong>Alice</strong> started new task: Tabler UI design.
          </React.Fragment>
        ),
        time: "1 hour ago"
      },
      {
        unread: false,
        avatarURL: "demo/faces/female/18.jpg",
        message: (
          <React.Fragment>
            <strong>Rose</strong> deployed new version of NodeJS REST Api // V3
          </React.Fragment>
        ),
        time: "2 hours ago"
      }
    ],
    accountDropdownProps: {
      avatarURL: "./demo/faces/female/25.jpg",
      name: "Jane Pearson",
      description: "Administrator",
      options: [
        { icon: "user", value: "Profile" },
        { icon: "settings", value: "Settings" },
        { icon: "mail", value: "Inbox", badge: "6" },
        { icon: "send", value: "Message" },
        { isDivider: true },
        { icon: "help-circle", value: "Need help?" },
        { icon: "log-out", value: "Sign out", to: "/logout" }
      ]
    }
  };

  componentDidMount = () => {
    if (
      this.props.store.auth.isAuthenticated &&
      this.props.store.auth.user == null
    ) {
      this.props.actions.getCurrentUserRequest();
    }
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    return nextProps.store != this.props.store;
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.store.auth.user != null)
      this.setState({
        accountDropdownProps: update(this.state.accountDropdownProps, {
          //avatarURL: {$set: nextProps.auth.user.imageUrl.replace(/\\/g, '/')},
          name: { $set: nextProps.store.auth.user.name },
          description: { $set: nextProps.store.auth.user.role }
        })
      });
  };

  render() {
    const notificationsObjects = this.state.notificationsObjects || [];
    const unreadCount = this.state.notificationsObjects.reduce(
      (a, v) => a || v.unread,
      false
    );

    return (
      <Site.Wrapper
        headerProps={{
          href: "/",
          alt: "Crystal Holiday",
          imageURL: "https://images.pexels.com/photos/346885/pexels-photo-346885.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
          navItems: (
            <Nav.Item type="div" className="d-none d-md-flex">
              <Button
                href="https://github.com/tabler/tabler-react"
                target="_blank"
                outline
                size="sm"
                RootComponent="a"
                color="primary"
              >
                Source code
              </Button>
            </Nav.Item>
          ),
          notificationsTray: {
            notificationsObjects,
            markAllAsRead: () =>
              this.setState(
                () => ({
                  notificationsObjects: this.state.notificationsObjects.map(
                    v => ({ ...v, unread: false })
                  )
                }),
                () =>
                  setTimeout(
                    () =>
                      this.setState({
                        notificationsObjects: this.state.notificationsObjects.map(
                          v => ({ ...v, unread: true })
                        )
                      }),
                    5000
                  )
              ),
            unread: unreadCount
          },
          accountDropdown: this.state.accountDropdownProps
        }}
        navProps={{ itemsObjects: navBarItems }}
        routerContextComponentType={withRouter(RouterContextProvider)}
        footerProps={{
          links: [
            <a href="#">First Link</a>,
            <a href="#">Second Link</a>,
            <a href="#">Third Link</a>,
            <a href="#">Fourth Link</a>,
            <a href="#">Five Link</a>,
            <a href="#">Sixth Link</a>,
            <a href="#">Seventh Link</a>,
            <a href="#">Eigth Link</a>
          ],
          note:
            "Premium and Open Source dashboard template with responsive and high quality UI. For Free!",
          copyright: (
            <React.Fragment>
              Copyright © 2019
              <a href="."> Tabler-react</a>. Theme by
              <a
                href="https://codecalm.net"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                codecalm.net
              </a>{" "}
              All rights reserved.
            </React.Fragment>
          ),
          nav: (
            <React.Fragment>
              <Grid.Col auto={true}>
                <List className="list-inline list-inline-dots mb-0">
                  <List.Item className="list-inline-item">
                    <a href="./docs/index.html">Documentation</a>
                  </List.Item>
                  <List.Item className="list-inline-item">
                    <a href="./faq.html">FAQ</a>
                  </List.Item>
                </List>
              </Grid.Col>
              <Grid.Col auto={true}>
                <Button
                  href="https://github.com/tabler/tabler-react"
                  size="sm"
                  outline
                  color="primary"
                  RootComponent="a"
                >
                  Source code
                </Button>
              </Grid.Col>
            </React.Fragment>
          )
        }}
      >
        {this.props.children}
      </Site.Wrapper>
    );
  }
}

const mapStateToProps = state => {
  return {
    store: state.default,
    routing: state.routing.locationBeforeTransitions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions.auth }, dispatch),
    dispatch
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SiteWrapper);
