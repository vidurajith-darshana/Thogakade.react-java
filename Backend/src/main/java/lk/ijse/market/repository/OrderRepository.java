package lk.ijse.market.repository;

import lk.ijse.market.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepository extends JpaRepository<Order,Integer> {
    @Query(value="select * from orders order by oid desc limit 1",nativeQuery = true)
    public Order getLastOrder();
}
