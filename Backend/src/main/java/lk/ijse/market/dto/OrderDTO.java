package lk.ijse.market.dto;

public class OrderDTO {

    private int oid;
    private String cid;
    private double totalPrice;

    public OrderDTO() {
    }

    public OrderDTO(int oid, String cid, double totalPrice) {
        this.oid = oid;
        this.cid = cid;
        this.totalPrice = totalPrice;
    }

    public int getOid() {
        return oid;
    }

    public void setOid(int oid) {
        this.oid = oid;
    }

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "oid=" + oid +
                ", cid='" + cid + '\'' +
                ", totalPrice=" + totalPrice +
                '}';
    }
}
