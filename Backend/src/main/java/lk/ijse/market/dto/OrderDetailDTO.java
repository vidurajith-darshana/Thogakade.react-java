package lk.ijse.market.dto;

public class OrderDetailDTO {

    private int orderId;
    private String itemName;
    private String customerName;
    private double itemPrice;
    private int qty;
    private double totalPricePerItem;

    public OrderDetailDTO() {
    }

    public OrderDetailDTO(int orderId, String itemName, String customerName, double itemPrice, int qty, double totalPricePerItem) {
        this.orderId = orderId;
        this.itemName = itemName;
        this.customerName = customerName;
        this.itemPrice = itemPrice;
        this.qty = qty;
        this.totalPricePerItem = totalPricePerItem;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public String getItemName() {
        return itemName;
    }

    public void setItemName(String itemName) {
        this.itemName = itemName;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public double getItemPrice() {
        return itemPrice;
    }

    public void setItemPrice(double itemPrice) {
        this.itemPrice = itemPrice;
    }

    public int getQty() {
        return qty;
    }

    public void setQty(int qty) {
        this.qty = qty;
    }

    public double getTotalPricePerItem() {
        return totalPricePerItem;
    }

    public void setTotalPricePerItem(double totalPricePerItem) {
        this.totalPricePerItem = totalPricePerItem;
    }

    @Override
    public String toString() {
        return "OrderDetailDTO{" +
                "orderId=" + orderId +
                ", itemName='" + itemName + '\'' +
                ", customerName='" + customerName + '\'' +
                ", itemPrice=" + itemPrice +
                ", qty=" + qty +
                ", totalPricePerItem=" + totalPricePerItem +
                '}';
    }
}
