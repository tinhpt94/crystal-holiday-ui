import React, { Component } from "react";
import { Table, Button } from "antd";

const mapOrderToDataSource = order => ({
  id: order.id,
  cardName: order.cardName,
  contractValue: order.contractValue,
  contractValueVat: order.contractValueVat,
  teleSale: order.telesale ? order.teleSale.name : null,
  sale: order.sale ? order.sale.name : null,
  saleAdmin: order.saleAdmin ? order.saleAdmin.name : null,
  saleManager: order.saleManager ? order.saleManager.name : null
});

export default class OrderTable extends Component {
  shouldComponentUpdate = nextProps => {
    return nextProps != this.props;
  };

  columns = [
    {
      title: "Mã hợp đồng",
      dataIndex: "id",
      key: "id"
    },
    {
      title: "Tên hợp đồng",
      dataIndex: "cardName",
      key: "cardName"
    },
    {
      title: "Giá trị hợp đồng",
      dataIndex: "contractValue",
      key: "contractValue"
    },
    {
      title: "Giá trị hợp đồng (VAT)",
      dataIndex: "contractValueVat",
      key: "contractValueVat"
    },
    {
      title: "Tele Sale",
      dataIndex: "teleSale",
      key: "teleSale"
    },
    {
      title: "Sale",
      dataIndex: "sale",
      key: "sale"
    },
    {
      title: "Sale Admin",
      dataIndex: "saleAdmin",
      key: "saleAdmin"
    },
    {
      title: "Sale Manager",
      dataIndex: "saleManager",
      key: "saleManager"
    },
    {
      key: "operation",
      fixed: "right",
      width: 100,
      render: (text, record) => <Button type="primary" onClick={() => this.logRecord(record)}>Chi tiết</Button>
    }
  ];

  logRecord = record => {
    console.log(this.props);
    this.props.history.push("/order/" + record.id);
  }

  render = () => {
    let dataSource = this.props.dataSource
      ? this.props.dataSource.map(mapOrderToDataSource)
      : null;
    return (
      <Table
        dataSource={dataSource}
        columns={this.columns}
        scroll={{ x: 1500, y: 300 }}
        rowKey={rowItem => rowItem.id}
      />
    );
  };
}
