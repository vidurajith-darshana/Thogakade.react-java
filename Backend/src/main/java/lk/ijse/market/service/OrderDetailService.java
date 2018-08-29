package lk.ijse.market.service;

import lk.ijse.market.dto.CustomerDTO;
import lk.ijse.market.dto.ItemDTO;
import lk.ijse.market.dto.OrderDTO;

import java.util.List;

public interface OrderDetailService {

    public boolean saveOrderDetail(OrderDTO orderDTO, List<ItemDTO> itemList);
}
