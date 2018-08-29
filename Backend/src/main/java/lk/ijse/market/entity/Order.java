package lk.ijse.market.entity;

import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int oid;

    @ManyToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
    private String Customer;

    private double totalPrice;

    public Order() {
    }

    public Order(int id) {
        this.oid=id;
    }

    public Order(int oid,String customer, double totalPrice) {
        this.oid=oid;
        Customer = customer;
        this.totalPrice = totalPrice;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getCustomer() {
        return Customer;
    }

    public void setCustomer(String customer) {
        Customer = customer;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "Order{" +
                "oid=" + oid +
                ", Customer='" + Customer + '\'' +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
