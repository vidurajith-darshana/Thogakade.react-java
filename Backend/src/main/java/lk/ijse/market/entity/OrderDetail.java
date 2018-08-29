package lk.ijse.market.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="orderdetail")
public class OrderDetail {

    @EmbeddedId
    private OrderDetailPK orderDetailPK;

    private double totalPricePerItem;
    private double qty;

    public OrderDetail() {
    }

    public OrderDetail(OrderDetailPK orderDetailPK, double totalPricePerItem, double qty) {
        this.orderDetailPK = orderDetailPK;
        this.totalPricePerItem = totalPricePerItem;
        this.qty = qty;
    }

    public OrderDetailPK getOrderDetailPK() {
        return orderDetailPK;
    }

    public void setOrderDetailPK(OrderDetailPK orderDetailPK) {
        this.orderDetailPK = orderDetailPK;
    }

    public double getTotalPricePerItem() {
        return totalPricePerItem;
    }

    public void setTotalPricePerItem(double totalPricePerItem) {
        this.totalPricePerItem = totalPricePerItem;
    }

    public double getQty() {
        return qty;
    }

    public void setQty(double qty) {
        this.qty = qty;
    }

    @Override
    public String toString() {
        return "OrderDetail{" +
                "orderDetailPK=" + orderDetailPK +
                ", totalPricePerItem=" + totalPricePerItem +
                ", qty=" + qty +
                '}';
    }
}
