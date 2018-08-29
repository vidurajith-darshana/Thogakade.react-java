package lk.ijse.market.service.impl;

import lk.ijse.market.dto.ItemDTO;
import lk.ijse.market.entity.Item;
import lk.ijse.market.repository.ItemRepository;
import lk.ijse.market.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;


@Service
@Transactional(propagation = Propagation.SUPPORTS,readOnly = true)
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean saveItem(ItemDTO itemDTO) {
        itemRepository.save(new Item(0,itemDTO.getName(),itemDTO.getPrice(),itemDTO.getAmount(),itemDTO.getUnit(),itemDTO.getImage()));
        return true;
    }

    @Override
    public List<ItemDTO> findAll() {
        try{
            List<Item> itemList=itemRepository.findAll();
            List<ItemDTO> list=new ArrayList<>();
            itemList.forEach(item->{
                list.add(new ItemDTO(item.getId(),item.getName(),item.getPrice(),item.getAmount(),item.getUnit(),item.getImage()));
            });

            return list;
        }catch(Exception ex){
            return null;
        }
    }

    @Override
    public ItemDTO findById(int id) {
        if(itemRepository.existsById(id)){
            Item item=itemRepository.findById(id).get();
            return new ItemDTO(item.getId(),item.getName(),item.getPrice(),item.getAmount(),item.getUnit(),item.getImage());
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    public List<ItemDTO> findByPage(int page, int size) {

        try{
            List<Item> itemList=itemRepository.findAll(PageRequest.of(page,size)).getContent();
            List<ItemDTO> list=new ArrayList<>();
            itemList.forEach(item->{
                list.add(new ItemDTO(item.getId(),item.getName(),item.getPrice(),item.getAmount(),item.getUnit(),item.getImage()));
            });

            return list;
        }catch(Exception ex){
            return null;
        }
    }

    @Override
    @Transactional(propagation = Propagation.REQUIRED)
    public boolean updateItem(ItemDTO itemDTO) {
        if(itemRepository.existsById(itemDTO.getId())){
            itemRepository.save(new Item(itemDTO.getId(),itemDTO.getName(),itemDTO.getPrice(),itemDTO.getAmount(),itemDTO.getUnit(),itemDTO.getImage()));
            return true;
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    public boolean deleteItem(ItemDTO itemDTO) {
        if(itemRepository.existsById(itemDTO.getId())){
            itemRepository.delete(new Item(itemDTO.getId(),itemDTO.getName(),itemDTO.getPrice(),itemDTO.getAmount(),itemDTO.getUnit(),itemDTO.getImage()));
            return true;
        }else{
            throw new RuntimeException("Customer doesn't exist");
        }
    }

    @Override
    public ItemDTO getLastItem() {
        Item item=itemRepository.getLastItem();
        ItemDTO itemDTO=new ItemDTO(item.getId(),item.getName(),item.getPrice(),item.getAmount(),item.getUnit(),item.getImage());
        return itemDTO;
    }
}
