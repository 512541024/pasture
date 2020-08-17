package com.example.main.service.intf;

import java.util.List;
import com.example.main.model.entity.Video;
import com.baomidou.mybatisplus.extension.service.IService;
public interface VideoService extends IService<Video>{


    int updateBatch(List<Video> list);

    int updateBatchSelective(List<Video> list);

    int batchInsert(List<Video> list);

}
