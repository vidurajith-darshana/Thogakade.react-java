package lk.ijse.market.service.impl;

import lk.ijse.market.dto.CustomerDTO;
import lk.ijse.market.dto.ItemDTO;
import lk.ijse.market.dto.OrderDTO;
import lk.ijse.market.entity.Item;
import lk.ijse.market.entity.Order;
import lk.ijse.market.entity.OrderDetail;
import lk.ijse.market.entity.OrderDetailPK;
import lk.ijse.market.repository.OrderDetailRepository;
import lk.ijse.market.repository.OrderRepository;
import lk.ijse.market.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional(readOnly = true,propagation = Propagation.REQUIRED)
public class OrderDetailServiceImpl implements OrderDetailService {

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderDetailRepository orderDetailRepository;

    @Override
    public boolean saveOrderDetail(OrderDTO orderDTO, List<ItemDTO> itemList) {
        try{
            Order order=new Order(0,orderDTO.getCid(),orderDTO.getTotalPrice());
            orderRepository.save(order);
            itemList.forEach(item->{
                orderDetailRepository.save(new OrderDetail(new OrderDetailPK(new Order(order.getOid()),new Item(item.getId())),item.getPrice()*item.getAmount(),item.getAmount()));
            });
            return true;
        }catch(Exception ex){
            return false;
        }
    }
}
