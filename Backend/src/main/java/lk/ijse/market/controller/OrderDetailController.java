package lk.ijse.market.controller;

import lk.ijse.market.dto.CustomerDTO;
import lk.ijse.market.dto.ItemDTO;
import lk.ijse.market.dto.OrderDTO;
import lk.ijse.market.service.OrderDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("market/v1/order")
public class OrderDetailController {

    @Autowired
    private OrderDetailService orderDetailService;

    public boolean saveOrderDetail(@RequestBody OrderDTO orderDTO,@RequestBody List<ItemDTO> itemList){
        if(orderDetailService.saveOrderDetail(orderDTO,itemList)){
            return true;
        }else{
            return false;
        }
    }
}
