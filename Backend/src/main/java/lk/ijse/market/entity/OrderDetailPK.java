package lk.ijse.market.entity;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Embeddable
public class OrderDetailPK {

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Order order;

    @ManyToOne(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
    private Item item;

    public OrderDetailPK(Order order, Item item) {
        this.order = order;
        this.item = item;
    }
}
