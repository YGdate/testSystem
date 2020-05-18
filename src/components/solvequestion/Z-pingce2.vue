<template>


    <div class="ingcon">
        <!-- 确认放弃考试 -->
        <el-dialog title="提示" :visible.sync="dialogVisible1" width="30%">
            <span>你确定要放弃考试吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible1 = false">取 消</el-button>
                <el-button type="primary" @click="fangqi">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 提交试卷 -->
        <el-dialog title="提示" :visible.sync="dialogVisible2" width="30%">
            <span>你确定要提交考试吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible2 = false">取 消</el-button>
                <el-button type="primary" @click="tijiao">确 定</el-button>
            </span>
        </el-dialog>
        <div class="con-left">
            <p class="headp">
                题目类型
            </p>
            <ul class="qc">
                <li :class="tab==tabs[0]?'lactive':''" data-aid="1" @click="qian($event.srcElement.dataset.aid)">
                    单选题({{allmsg.single_select[0].score}}分一个)</li>
                <li :class="tab==tabs[1]?'lactive':''" data-aid="2" @click="qian($event.srcElement.dataset.aid)">
                    多选题({{allmsg.multi_select[0].score}}分一个)</li>
                <li :class="tab==tabs[2]?'lactive':''" data-aid="3" @click="qian($event.srcElement.dataset.aid)">
                    七选五({{allmsg.seven_selected_five[0].score}}分一个)</li>
                <li :class="tab==tabs[3]?'lactive':''" data-aid="4" @click="qian($event.srcElement.dataset.aid)">
                    判断题({{allmsg.true_or_false[0].score}}分一个)</li>
                <li :class="tab==tabs[4]?'lactive':''" data-aid="5" @click="qian($event.srcElement.dataset.aid)">
                    填空题({{allmsg.fill[0].score}}分一个)</li>
                <li :class="tab==tabs[5]?'lactive':''" data-aid="6" @click="qian($event.srcElement.dataset.aid)">
                    选词填空({{allmsg.choose_fill_blank[0].score}}分一个)</li>
                <li :class="tab==tabs[6]?'lactive':''" data-aid="7" @click="qian($event.srcElement.dataset.aid)">
                    完型填空({{allmsg.fill_blank[0].score}}分一个)</li>
                <li :class="tab==tabs[7]?'lactive':''" data-aid="8" @click="qian($event.srcElement.dataset.aid)">
                    听力({{allmsg.listening[0].score}}分一个)</li>
                <li :class="tab==tabs[8]?'lactive':''" data-aid="9" @click="qian($event.srcElement.dataset.aid)">
                    非定向选择({{allmsg.non_directional_select[0].score}}分一个)</li>
                <li :class="tab==tabs[9]?'lactive':''" data-aid="10" @click="qian($event.srcElement.dataset.aid)">
                    阅读理解({{allmsg.read_understand[0].score}}分)</li>
                <li :class="tab==tabs[10]?'lactive':''" data-aid="11" @click="qian($event.srcElement.dataset.aid)">
                    短文改错({{allmsg.text_mistake[0].score}}分一个)</li>
                <li :class="tab==tabs[11]?'lactive':''" data-aid="12" @click="qian($event.srcElement.dataset.aid)">
                    翻译({{allmsg.translation[0].score}}分)</li>
                <li :class="tab==tabs[12]?'lactive':''" data-aid="13" @click="qian($event.srcElement.dataset.aid)">
                    作文({{allmsg.composition[0].score}}分)</li>
            </ul>
        </div>
        <div class="con-center">
            <!-- 剩余时间 -->
            <span class="time">剩余时间{{fen}}分{{miao}}秒</span>
            <!-- 开始考试 -->
            <el-button type="primary" class="star" :class="{ hidden: ishidden }" @click="starexam">开始考试</el-button>
            <!-- 放弃考试 -->
            <el-button type="primary" class="end" @click="dialogVisible1=true">放弃考试</el-button>
            <!-- 提交考试 -->
            <el-button type="primary" class="star" @click="dialogVisible2=true" :class="{ hidden: !ishidden }">提交考试
            </el-button>

            <!-- 单选题demo -->
            <div class="dxs" :class="tab!=tabs[0]?'tt':''">
                <p class="headp">单选题</p>
                <div class="danxuan zong" v-for="(item,i) in allmsg.single_select" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <template>
                        <el-radio v-model="dan[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
                        <el-radio v-model="dan[i]" label="B" class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
                        <el-radio v-model="dan[i]" label="C" class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
                        <el-radio v-model="dan[i]" label="D" class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                    </template>
                </div>

            </div>

            <!-- 多选题demo -->
            <div class="dxs" :class="tab!=tabs[1]?'tt':''">
                <p class="headp">多选题</p>
                <div class="duoxuan zong" v-for="(item,i) in allmsg.multi_select" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <template>
                        <el-checkbox v-model="duo[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}
                        </el-checkbox>
                        <el-checkbox v-model="duo[i]" label="B" class="xuanze">{{item.topic_and_stem.options.B}}
                        </el-checkbox>
                        <el-checkbox v-model="duo[i]" label="C" class="xuanze">{{item.topic_and_stem.options.C}}
                        </el-checkbox>
                        <el-checkbox v-model="duo[i]" label="D" class="xuanze">{{item.topic_and_stem.options.D}}
                        </el-checkbox>
                    </template>
                </div>


            </div>
            <!-- 七选五demo -->
            <div class="qiwus" :class="tab!=tabs[2]?'tt':''">
                <p class="headp">7选五</p>
                <div class="qiwu zong" v-for="(item,i) in allmsg.seven_selected_five" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <p v-for="(itx,s,x) in allmsg.seven_selected_five[i].topic_and_stem.options" :key="x">
                        {{s}}.{{itx}}
                    </p>
                    <el-input v-model="qi[i][0]" maxlength=1 style="width:50px;" :placeholder="1"></el-input>
                    <el-input v-model="qi[i][1]" maxlength=1 style="width:50px;" :placeholder="2"></el-input>
                    <el-input v-model="qi[i][2]" maxlength=1 style="width:50px;" :placeholder="3"></el-input>
                    <el-input v-model="qi[i][3]" maxlength=1 style="width:50px;" :placeholder="4"></el-input>
                    <el-input v-model="qi[i][4]" maxlength=1 style="width:50px;" :placeholder="5"></el-input>
                </div>

            </div>
            <!-- 判断题 -->
            <div class="dxs" :class="tab!=tabs[3]?'tt':''">
                <p class="headp">判断题</p>
                <div class="danxuan zong" v-for="(item,i) in allmsg.true_or_false" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <template>
                        <el-radio v-model="pan[i]" label="true" class="xuanze">对</el-radio>
                        <el-radio v-model="pan[i]" label="false" class="xuanze">错</el-radio>
                    </template>
                </div>

            </div>
            <!-- 填空题demo -->
            <div class="tks" :class="tab!=tabs[4]?'tt':''">
                <p class="headp">填空题</p>
                <div class="tk zong" v-for="(item,i) in allmsg.fill" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <!-- <p>解析:{{item.knowledge_point}}</p> -->
                </div>
            </div>

            <!-- 选词填空demo -->
            <div class="xctks" :class="tab!=tabs[5]?'tt':''">
                <p class="headp">选词填空</p>
                <div clas="xctk zong" v-for="(item,i) in allmsg.choose_fill_blank" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <div v-for="(item, key, x) in allmsg.choose_fill_blank[i].topic_and_stem.options" :key="x">
                        {{key}}:{{item}}</div>
                    <el-input v-model="xuan[i][y]" maxlength=1 style="width:50px;" v-for="(itm,y) in xuan[i]" :key="y"
                        :placeholder="y+1" @input="updateView($event)"></el-input>
                </div>
            </div>


            <!-- 完形填空demo -->
            <div class="wxtks" :class="tab!=tabs[6]?'tt':''">
                <p class="headp">完型填空</p>
                <div class="wxtk zong" v-for="(item,i) in allmsg.fill_blank" :key="i">
                    <p>{{allmsg.fill_blank[0].topic_and_stem[0]}}
                        <div v-for="(nei,key,i) in allmsg.fill_blank[0].topic_and_stem[1]" :key="i">
                            <p>第{{i+1}}题</p>
                            <el-radio v-model="wan[i]" label="A" class="xuanze">{{nei.A}}</el-radio>
                            <el-radio v-model="wan[i]" label="B" class="xuanze">{{nei.B}}</el-radio>
                            <el-radio v-model="wan[i]" label="C" class="xuanze">{{nei.C}}</el-radio>
                            <el-radio v-model="wan[i]" label="D" class="xuanze">{{nei.D}}</el-radio>
                        </div>
                </div>
            </div>
            <!-- 听力demo -->
            <div class="tinglis" :class="tab!=tabs[7]?'tt':''">
                <p class="headp">听力(双击选择)</p>
                <div v-for="(item2,i2) in allmsg.listening" :key="i2">
                    <p>听力第{{i2+1}}题</p>
                    <audio :src="item2.topic_and_stem.accessory" controls="controls">
                        Your browser does not support the audio element.
                    </audio>
                    <div class="tingli zong" v-for="(item,i) in allmsg.listening[0].topic_and_stem.title" :key="i"
                        @input="updateView($event)">
                        <p>{{i+1}}.{{item.title}}</p>
                        <template>
                            <el-radio v-model="ting[i2][i]" label="A" class="xuanze">{{item.options.A}}</el-radio>
                            <el-radio v-model="ting[i2][i]" label="B" class="xuanze">{{item.options.B}}</el-radio>
                            <el-radio v-model="ting[i2][i]" label="C" class="xuanze">{{item.options.C}}</el-radio>
                            <!-- <el-radio v-model="ting" label="D"  class="xuanze">{{item.options.D}}</el-radio> -->
                        </template>
                    </div>
                </div>

            </div>
            <!-- 非定向demo -->
            <div class="fdxs" :class="tab!=tabs[8]?'tt':''">
                <p class="headp">非定向选择</p>
                <div class="fdx zong" v-for="(item,i) in allmsg.non_directional_select" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                    <template>
                        <el-radio v-model="fei[i]" label="A" class="xuanze">{{item.topic_and_stem.options.A}}</el-radio>
                        <el-radio v-model="fei[i]" label="B" class="xuanze">{{item.topic_and_stem.options.B}}</el-radio>
                        <el-radio v-model="fei[i]" label="C" class="xuanze">{{item.topic_and_stem.options.C}}</el-radio>
                        <el-radio v-model="fei[i]" label="D" class="xuanze">{{item.topic_and_stem.options.D}}</el-radio>
                    </template>
                </div>
            </div>
            <!-- 阅读理解的demo -->
            <div class="rdljs" :class="tab!=tabs[9]?'tt':''">
                <p class="headp">阅读理解(双击选择)</p>
                <div class="rdlj" v-for="(item,i) in allmsg.read_understand" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem[0]}}</p>
                    <div v-for="(ite,key,y) in item.topic_and_stem[1]" :key="y" @input="updateView($event)">
                        <p>{{ite.title}}</p>
                        <el-radio v-model="yuedu[i][y]" label="A" class="xuanze">{{ite.options.A}}</el-radio>
                        <el-radio v-model="yuedu[i][y]" label="B" class="xuanze">{{ite.options.B}}</el-radio>
                        <el-radio v-model="yuedu[i][y]" label="C" class="xuanze">{{ite.options.C}}</el-radio>
                        <el-radio v-model="yuedu[i][y]" label="D" class="xuanze">{{ite.options.D}}</el-radio>
                    </div>
                </div>
            </div>


            <!-- 短文改错的demo -->
            <div class="dwgcs" :class="tab!=tabs[10]?'tt':''">
                <p class="headp">短文改错</p>
                <div class="dwgc zong" v-for="(item,i) in allmsg.text_mistake" :key="i">
                    <p>{{i+1}}.{{item.topic_and_stem.title}}</p>
                </div>
            </div>


            <!-- 翻译的demo -->

            <div class="fys" :class="tab!=tabs[11]?'tt':''">
                <p class="headp">翻译</p>
                <div class="fy zong" v-for="(item,i) in allmsg.translation" :key="i">
                    <p>{{item.topic_and_stem.title}}</p>
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="fy">
                    </el-input>
                </div>
            </div>


            <!-- 作文的demo -->

            <div class="zws" :class="tab!=tabs[12]?'tt':''">
                <p class="headp">作文</p>
                <div class="zw zong" v-for="(item,i) in allmsg.composition" :key="i">
                    <p>{{item.topic_and_stem.title}}</p>
                    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="zw">
                    </el-input>
                </div>
            </div>









        </div>
        <div class="con-right">
            <p class="headp">
                答题卡
            </p>

            <div class="tkt" v-for="(item,i) in tian" :key="i">
                <p>填空第{{i+1}}题</p>
                <el-input placeholder="请输入内容" @input="updateView($event)" v-model="tian[i][y]"
                    v-for="(ite,y) in tian[i]" :key="y"></el-input> -->

            </div>

            <div class="tkt" v-for="(item,i) in allmsg.text_mistake" :key="i">
                <p>短文改错第{{i+1}}题</p>
                <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="dwgc[i]">
                </el-input>
                -->

            </div>
        </div>
        <div style="height:60px:float:left">
        </div>
    </div>



</template>



<script>
    export default {
        // 开局调用
        created() {
            this.exammsg();

        },
        data() {
            return {
                //  所有的数据
                allmsg: {},
                dialogVisible1: false,
                dialogVisible2: false,
                sureclose: false,
                zdy: {
                    g: '',
                    sx: ''
                },
                // 是否隐藏
                ishidden: false,
                // 单选题答案存储
                dan: [],
                // 多选题答案储存
                duo: [],
                // 判断题
                pan: [],
                // 七选五
                qi: [],
                // 填空题答案
                tian: [],
                // 选词填空
                xuan: [],
                // 完型填空
                wan: [],
                // 听力
                ting: [],
                // 非定向选择
                fei: [],
                // 阅读理解
                yuedu: [],
                // 短文该错
                dwgc: [],
                // 翻译
                fy: '',
                // 作文
                zw: '',
                // tab选项卡
                tab: 1,
                // tab选项卡的四个
                tabs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
                // 所有时间
                alltime: 1800,
                // 分钟
                fen: '30',
                // 秒数
                miao: '0',
                // 音频
                mp3: ''
            }
        },
        methods: {

            close: function () {
                this.sureclose = true;
            },
            examover: function () {
                this.$router.push("ziexamover")
            },
            // 获取传过来的值
            async exammsg() {
                var storage = window.sessionStorage;
                let examid = storage.getItem("examid");

                let msg = await this.$http.get('exam/' + examid, {
                    params: {
                        candidate_id: parseInt(examid),
                    }
                });
                if (msg.data.code == 0) {
                    let ms = this.$decryptData(msg.data.data);
                    // this.allmsg = ms;

                    // let arr = {
                    //     "fill": [{
                    //         "id": 3,
                    //         "score": 5,
                    //         "category": "fill",
                    //         "getScore": "",
                    //         "space_num": 4,
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"骨按其形态可分为____，____，____和____四类。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 29,
                    //         "score": 5,
                    //         "category": "fill",
                    //         "getScore": "",
                    //         "space_num": 4,
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"骨按其形态可分为____，____，____和____四类。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 32,
                    //         "score": 5,
                    //         "category": "fill",
                    //         "getScore": "",
                    //         "space_num": 4,
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"骨按其形态可分为____，____，____和____四类。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 49,
                    //         "score": 5,
                    //         "category": "fill",
                    //         "getScore": "",
                    //         "space_num": 4,
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"骨按其形态可分为____，____，____和____四类。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "listening": [{
                    //         "id": 79,
                    //         "score": 5,
                    //         "category": "listening",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":{\"question_1\":{\"title\":\"What room does the man want?\", \"options\":{\"A\":\"Simple\", \"B\":\"Double\", \"C\":\"Twin\"}}, \"question_2\":{\"title\":\"What will the man buy?\", \"options\":{\"A\":\"Vegetable\", \"B\":\"Meat\", \"C\":\"Bread\"}}, \"question_3\":{\"title\":\"hat does the man plan to do?\", \"options\":{\"A\":\"Go fishing\", \"B\":\"Go jogging\", \"C\":\"Go camping\"}}, \"question_4\":{\"title\":\"How much is the change?\", \"options\":{\"A\":\"$8\", \"B\":\"$42\", \"C\":\"$50\"}}}, \"accessory\":\"http://localhost/uploads/voice/voice/202005/07/1588840854_qk9mGmGRD3.mp3\"}",
                    //         "knowledge_point": "人类知识",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "fill_blank": [{
                    //         "id": 68,
                    //         "score": 5,
                    //         "category": "fill_blank",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "[\"The worst thing is the headlines. I use the underground almost every day and watch the people travel, their heads __1__ in the{r newspapers. The headlines today __2__ suicide （自杀） bombers and of horrific attacks that they say __3__ by members of our community.\\nSomething on the journey is __4__ . I am not __5__ anything that would indicate I am a Muslim. I normally do not __6__ it is Friday and I am on my way to prayers. __7__ I sense an uneasiness in the carriage. People are __8__ . No one is speaking and it must be said that no one is being __9__ unfriendly towards me. But I think the __10__ I get are different. I am being checked out, sized up. It is all a bit uncomfortable.\\nPeople are looking around for things and people __11__ look suspicious （可疑的）。 I am doing it a bit __12__ and in the coming days, as more claims are made about the people who did this and their aims, that feeling is likely to get __13__ . As you look around the __14__ , it is difficult to know what people are thinking. Some are __15__ thinking “those Muslims come here and look what they do\\\" but they __16__ understand we condemn （谴责） this like everyone else.\\nWhoever did this didn't __17__ about who was killed or whether they were Christian or Muslim. They just had no respect __18__ human life at all. We all travel around London and we use public transport. We have as much fear as anyone else about __19__ in something. But in the coming days, everyone is going to have to work together and keep calm. We will look out for each other and that's how we. will __20__ this difficulty.\",{\"1\":{\"A\":\"buried\",\"B\":\"hung\",\"C\":\"sunk\",\"D\":\"hidden\"},\"2\":{\"A\":\"Speak of\",\"B\":\"talk over\",\"C\":\"tell about\",\"D\":\"think out\"},\"3\":{\"A\":\"were carried on\",\"B\":\"to carry out\",\"C\":\"were carried out\",\"D\":\"to carry on\"},\"4\":{\"A\":\"different\",\"B\":\"interesting\",\"C\":\"difficult\",\"D\":\"easy\"},\"5\":{\"A\":\"putting on\",\"B\":\"wearing\",\"C\":\"dressing\",\"D\":\"having on\"},\"6\":{\"A\":\"unless\",\"B\":\"until\",\"C\":\"before\",\"D\":\"after\"},\"7\":{\"A\":\"However\",\"B\":\"And\",\"C\":\"But\",\"D\":\"Thus\"},\"8\":{\"A\":\"noisy\",\"B\":\"quiet\",\"C\":\"cheerful\",\"D\":\"calm\"},\"9\":{\"A\":\"in any way\",\"B\":\"in a way\",\"C\":\"in one way\",\"D\":\"in no way\"},\"10\":{\"A\":\"experiences\",\"B\":\"ideas\",\"C\":\"looks\",\"D\":\"opinions\"},\"11\":{\"A\":\"whom\",\"B\":\"that\",\"C\":\"which\",\"D\":\"who\"},\"12\":{\"A\":\"himself\",\"B\":\"oneself\",\"C\":\"itself\",\"D\":\"myself\"},\"13\":{\"A\":\"better\",\"B\":\"less\",\"C\":\"worse\",\"D\":\"more\"},\"14\":{\"A\":\"carriage\",\"B\":\"bus\",\"C\":\"train\",\"D\":\"taxi\"},\"15\":{\"A\":\"probably\",\"B\":\"surely\",\"C\":\"certainly\",\"D\":\"hopefully\"},\"16\":{\"A\":\"are able to\",\"B\":\"may\",\"C\":\"might\",\"D\":\"have to\"},\"17\":{\"A\":\"care\",\"B\":\"ask\",\"C\":\"know\",\"D\":\"hear\"},\"18\":{\"A\":\"of\",\"B\":\"with\",\"C\":\"to\",\"D\":\"for\"},\"19\":{\"A\":\"keeping up\",\"B\":\"being caught up\",\"C\":\"being kept up with\",\"D\":\"catching up\"},\"20\":{\"A\":\"get through\",\"B\":\"get away\",\"C\":\"get off\",\"D\":\"get out\"}}]",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "composition": [{
                    //         "id": 13,
                    //         "score": 5,
                    //         "category": "composition",
                    //         "getScore": "",
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"For this part，you are allowed 30 minutes to write a short essay onthe importance of speaking ability and how to develop it.You should write at least 120 words but no more than180 words.\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "translation": [{
                    //         "id": 70,
                    //         "score": 5,
                    //         "category": "translation",
                    //         "getScore": "",
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"华山位于华阴市，距西安120公里。华山是秦岭的一部分，秦岭不仅分隔陕南与陕北，也分隔华南与华北。与从前人们常去朝拜的泰山不同，华山过去很少有人光临，因为上山的道路极其危险。然而，希望长寿的人却经常上山，因为山上生长着许多药草，特别是一些稀有的药草。自上世纪90年代安装缆车以来，参观人数大大增加。（145字）\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "multi_select": [{
                    //         "id": 62,
                    //         "score": 5,
                    //         "category": "multi_select",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"人的身高可能为____\",\"options\":{\"A\":\"200 cm\",\"B\":\"5000 cm\",\"C\":\"100 cm\",\"D\":\"150 cm\"}}",
                    //         "knowledge_point": "人类知识",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 63,
                    //         "score": 5,
                    //         "category": "multi_select",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"人的身高可能为____\",\"options\":{\"A\":\"150 cm\",\"B\":\"100 cm\",\"C\":\"5000 cm\",\"D\":\"200 cm\"}}",
                    //         "knowledge_point": "人类知识",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "text_mistake": [{
                    //         "id": 23,
                    //         "score": 5,
                    //         "category": "text_mistake",
                    //         "getScore": "",
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"Late in the afternoon of Saturday in July, a boy-herder was enjoying listening the click of the rails nearby when sudden black clouds began to-gather. Now the boy is driving the goats to a cave. When he reached to the cave, he saw that many wild goats come already. To catch them all, he gave the wild goats the grass what he had brought for his own goats at outside. When the storm was over, to his surprised, he saw his own goats had died, and the wild goats had run away the hills and the woods.\"}",
                    //         "knowledge_point": "英语小练习",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 65,
                    //         "score": 5,
                    //         "category": "text_mistake",
                    //         "getScore": "",
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"Late in the afternoon of Saturday in July, a boy-herder was enjoying listening the click of the rails nearby when sudden black clouds began to-gather. Now the boy is driving the goats to a cave. When he reached to the cave, he saw that many wild goats come already. To catch them all, he gave the wild goats the grass what he had brought for his own goats at outside. When the storm was over, to his surprised, he saw his own goats had died, and the wild goats had run away the hills and the woods.\"}",
                    //         "knowledge_point": "英语小练习",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 67,
                    //         "score": 5,
                    //         "category": "text_mistake",
                    //         "getScore": "",
                    //         "isObjective": false,
                    //         "topic_and_stem": "{\"title\":\"Late in the afternoon of Saturday in July, a boy-herder was enjoying listening the click of the rails nearby when sudden black clouds began to-gather. Now the boy is driving the goats to a cave. When he reached to the cave, he saw that many wild goats come already. To catch them all, he gave the wild goats the grass what he had brought for his own goats at outside. When the storm was over, to his surprised, he saw his own goats had died, and the wild goats had run away the hills and the woods.\"}",
                    //         "knowledge_point": "英语小练习",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "single_select": [{
                    //         "id": 60,
                    //         "score": 5,
                    //         "category": "single_select",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"三角形的内角和为____\",\"options\":{\"A\":9,\"B\":7,\"C\":8,\"D\":6}}",
                    //         "knowledge_point": "for 循环",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 61,
                    //         "score": 5,
                    //         "category": "single_select",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"三角形的内角和为____\",\"options\":{\"A\":7,\"B\":8,\"C\":6,\"D\":9}}",
                    //         "knowledge_point": "for 循环",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "true_or_false": [{
                    //         "id": 51,
                    //         "score": 5,
                    //         "category": "true_or_false",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"胸外心脏按压的主要目的是造成胸腔内压的变化，促使血液循环。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 55,
                    //         "score": 5,
                    //         "category": "true_or_false",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"胸外心脏按压的主要目的是造成胸腔内压的变化，促使血液循环。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 53,
                    //         "score": 5,
                    //         "category": "true_or_false",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"胸外心脏按压的主要目的是造成胸腔内压的变化，促使血液循环。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 52,
                    //         "score": 5,
                    //         "category": "true_or_false",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"胸外心脏按压的主要目的是造成胸腔内压的变化，促使血液循环。\"}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "read_understand": [{
                    //         "id": 35,
                    //         "score": 5,
                    //         "category": "read_understand",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "[\"Normally a student must attend a certain number of courses in order to graduate, and each course which he attends gives him a credit which he may count towards a degree,In many American universities the total work for a degree consists of thirty-six courses each lasting for one semester. A typical course consists of three classes per week for fifteen weeks;while attending a university a student will probably attend four or five courses during each semester. Normally a student. Would expect to take four years attending two semesters each year. It is possible to spread the period of work for the degree over a longer period. It is also possible for a student to move between one university and another during his degree course,though this is not in fact done as a regular practice.\\nFor very course that the follows a student is given a grade,which is recorded, and the record is availablefor the student to show to prospective employers.All this imposes a constant pressure and strain of work,but in spite of this some students still find time for great activity in student affairs.Elections to positions in student organizations arouse much enthusiasm.The effective work of maintaining discipline is usually performed by students who advise the academic authorities.Any student who is thought to have broken therules,for example,by cheating his to appear before a student court.With the enormous numbers of students, the operation of the system does involve a certain amount of activity.A student who has held one of these positions of authority is much respected and it will be of benefit to him later in his career.\",{\"1\":{\"title\":\"Normally a student would at least attend ______ classes each week.\",\"options\":{\"A\":\"36\",\"B\":\"20\",\"C\":\"12\",\"D\":\"15\"}},\"2\":{\"title\":\"According to the first paragraph an American student is allowed ______.\",\"options\":{\"A\":\"to live in a different university\",\"B\":\"to live at home and drive to classes\",\"C\":\"to take a particular course in a different university\",\"D\":\"to get two degrees from two different universities\"}},\"3\":{\"title\":\"America university students are usually under pressure of work because__________\",\"options\":{\"A\":\"they have to observe university discipline\",\"B\":\"they are heavily involved in student affairs\",\"C\":\"their academic performance will affect their future careers\",\"D\":\"they want to run for positions of authority\"}},\"4\":{\"title\":\"Some students are enthusiastic for positions in student organizations probably because______\",\"options\":{\"A\":\"such positions help them get better jobs\",\"B\":\"they hate the constant pressure and strain of their study\",\"C\":\"they will then be able to stay longer in the university\",\"D\":\"such positions are usually well paid\"}},\"5\":{\"title\":\"The student organizations seem to be effective in ___________\",\"options\":{\"A\":\"keeping up the students’ enthusiasm for social activities\",\"B\":\"ensuring that the students observe university regulations\",\"C\":\"evaluating students’ performance by bringing them before a court\",\"D\":\"dealing with the academic affairs of the university\"}}}]",
                    //         "knowledge_point": "知识点",
                    //         "degree_of_difficulty": 0
                    //     }, {
                    //         "id": 41,
                    //         "score": 5,
                    //         "category": "read_understand",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "[\"Normally a student must attend a certain number of courses in order to graduate, and each course which he attends gives him a credit which he may count towards a degree,In many American universities the total work for a degree consists of thirty-six courses each lasting for one semester. A typical course consists of three classes per week for fifteen weeks;while attending a university a student will probably attend four or five courses during each semester. Normally a student. Would expect to take four years attending two semesters each year. It is possible to spread the period of work for the degree over a longer period. It is also possible for a student to move between one university and another during his degree course,though this is not in fact done as a regular practice.\\nFor very course that the follows a student is given a grade,which is recorded, and the record is availablefor the student to show to prospective employers.All this imposes a constant pressure and strain of work,but in spite of this some students still find time for great activity in student affairs.Elections to positions in student organizations arouse much enthusiasm.The effective work of maintaining discipline is usually performed by students who advise the academic authorities.Any student who is thought to have broken therules,for example,by cheating his to appear before a student court.With the enormous numbers of students, the operation of the system does involve a certain amount of activity.A student who has held one of these positions of authority is much respected and it will be of benefit to him later in his career.\",{\"1\":{\"title\":\"Normally a student would at least attend ______ classes each week.\",\"options\":{\"A\":\"36\",\"B\":\"20\",\"C\":\"12\",\"D\":\"15\"}},\"2\":{\"title\":\"According to the first paragraph an American student is allowed ______.\",\"options\":{\"A\":\"to live in a different university\",\"B\":\"to live at home and drive to classes\",\"C\":\"to take a particular course in a different university\",\"D\":\"to get two degrees from two different universities\"}},\"3\":{\"title\":\"America university students are usually under pressure of work because__________\",\"options\":{\"A\":\"they have to observe university discipline\",\"B\":\"they are heavily involved in student affairs\",\"C\":\"their academic performance will affect their future careers\",\"D\":\"they want to run for positions of authority\"}},\"4\":{\"title\":\"Some students are enthusiastic for positions in student organizations probably because______\",\"options\":{\"A\":\"such positions help them get better jobs\",\"B\":\"they hate the constant pressure and strain of their study\",\"C\":\"they will then be able to stay longer in the university\",\"D\":\"such positions are usually well paid\"}},\"5\":{\"title\":\"The student organizations seem to be effective in ___________\",\"options\":{\"A\":\"dealing with the academic affairs of the university\",\"B\":\"keeping up the students’ enthusiasm for social activities\",\"C\":\"evaluating students’ performance by bringing them before a court\",\"D\":\"ensuring that the students observe university regulations\"}}}]",
                    //         "knowledge_point": "考查初级英语能力",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "choose_fill_blank": [{
                    //         "id": 77,
                    //         "score": 5,
                    //         "category": "choose_fill_blank",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"Did Sarah Josepha Hale write “Mary’s Little Lamb,” the eternal nursery rhyme (儿歌) about girl named Mary with a stubborn lamb? This is still disputed, but it’s clear that the woman __26__ for writing it was one of America’s most fascinating __27__ . In honor of the poem publication on May 24,1830, here’s more about the __28__ author’s life.\\nHale wasn’t just a writer, she was also a __29__ social advocate, and she was particularly __30__ with an ideal New England, which she associated with abundant Thanksgiving meals that she claimed had “a deep moral influence,” she began a nationwide __31__ to have a national holiday declared that would bring families together while celebrating the __32__ festivals. In 1863, after 17 years of advocacy including letters to five presidents, Hale got it. President Abraham Lincoln during the Civil War, issued a __33__ setting aside the last Thursday in November for the holiday.\\nThe true authorship of “Mary’s Little Lamb” is disputed. According to New England Historical Society, Hale wrote only one part of the poem, but claimed authorship. Regardless of the author, it seems that the poem was __34__by a real event. When young Mary Sawyer was followed to school by a lamb in 1816, it caused some problems. A bystander named John Roulstone wrote a poem about the event, then, at some point, Hale herself seems to have helped write it. However, if a 1916 piece by her great-niece is to be trusted, Hale claimed for the __35__of her life that “Some other people pretended that someone else wrote the poem”.\", \"options\":{\"A\":\"campaign\", \"B\":\"career\", \"C\":\"characters\", \"D\":\"features\", \"E\":\"fierce\", \"F\":\"inspired\", \"G\":\"latter\", \"H\":\"obsessed\", \"I\":\"proclamation\", \"J\":\"rectified\", \"K\":\"reputed\", \"L\":\"rest\", \"M\":\"supposed\", \"N\":\"traditional\", \"O\":\"versatile\"}}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "seven_selected_five": [{
                    //         "id": 57,
                    //         "score": 5,
                    //         "category": "seven_selected_five",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"Color is  ____ fundamental in ____  home design—something ____  you’ll ____  always have in ____ every room. A grasp of\", \"options\":{\"A\":\"While all of them are useful\", \"B\":\"Whatever you’re looking for\", \"C\":\"If you’re experimenting with a color\", \"D\":\"Small color choices are the ones we’re most familiar with\", \"E\":\"It’s not really a good idea to use too many\", \"F\":\"So it pays to be sure, because you want to get it\", \"G\":\"Color choices in this range are a step up from the\"}}",
                    //         "knowledge_point": "生物知识点",
                    //         "degree_of_difficulty": 0
                    //     }],
                    //     "non_directional_select": [{
                    //         "id": 2,
                    //         "score": 5,
                    //         "category": "non_directional_select",
                    //         "getScore": "",
                    //         "isObjective": true,
                    //         "topic_and_stem": "{\"title\":\"人的身高可能为____\", \"options\":{\"A\":\"100 cm\", \"B\":\"200 cm\", \"C\":\"150 cm\", \"D\":\"5000 cm\"}}",
                    //         "knowledge_point": "人类知识",
                    //         "degree_of_difficulty": 0
                    //     }]
                    // }、
                    let arr = {
                        "fill": [{
                            "id": 30,
                            "score": 5,
                            "category": "fill",
                            "getScore": "",
                            "right_ans": {
                                "1": "文库长骨",
                                "2": "短骨",
                                "3": "扁骨",
                                "4": "不规则骨"
                            },
                            "isObjective": false,
                            "topic_and_stem": "{\"title\": \"骨按其形态可分为____，____，____和____四类。\"}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "listening": [{
                            "id": 25,
                            "score": 5,
                            "category": "listening",
                            "getScore": "",
                            "right_ans": {
                                "1": "A",
                                "2": "C",
                                "3": "B",
                                "4": "A"
                            },
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": {\"question_1\": {\"title\": \"What room does the man want?\", \"options\": {\"A\": \"Simple\", \"B\": \"Double\", \"C\": \"Twin\"}}, \"question_2\": {\"title\": \"What will the man buy?\", \"options\": {\"A\": \"Vegetable\", \"B\": \"Meat\", \"C\": \"Bread\"}}, \"question_3\": {\"title\": \"hat does the man plan to do?\", \"options\": {\"A\": \"Go fishing\", \"B\": \"Go jogging\", \"C\": \"Go camping\"}}, \"question_4\": {\"title\": \"How much is the change?\", \"options\": {\"A\": \"$8\", \"B\": \"$42\", \"C\": \"$50\"}}}, \"accessory\": \"http://localhost/uploads/voice/voice/202005/07/1588840854_qk9mGmGRD3.mp3\"}",
                            "knowledge_point": "人类知识",
                            "degree_of_difficulty": 0
                        }],
                        "fill_blank": [{
                            "id": 68,
                            "score": 5,
                            "category": "fill_blank",
                            "getScore": "",
                            "right_ans": {
                                "1": "A",
                                "2": "D",
                                "3": "B",
                                "4": "A",
                                "5": "C",
                                "6": "A",
                                "7": "C",
                                "8": "C",
                                "9": "D",
                                "10": "A",
                                "11": "B",
                                "12": "C",
                                "13": "B",
                                "14": "A",
                                "15": "C",
                                "16": "A",
                                "17": "D",
                                "18": "C",
                                "19": "B",
                                "20": "D"
                            },
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"The worst thing is the headlines. I use the underground almost every day and watch the people travel, their heads __1__ in the{r newspapers. The headlines today __2__ suicide （自杀） bombers and of horrific attacks that they say __3__ by members of our community.\\nSomething on the journey is __4__ . I am not __5__ anything that would indicate I am a Muslim. I normally do not __6__ it is Friday and I am on my way to prayers. __7__ I sense an uneasiness in the carriage. People are __8__ . No one is speaking and it must be said that no one is being __9__ unfriendly towards me. But I think the __10__ I get are different. I am being checked out, sized up. It is all a bit uncomfortable.\\nPeople are looking around for things and people __11__ look suspicious （可疑的）。 I am doing it a bit __12__ and in the coming days, as more claims are made about the people who did this and their aims, that feeling is likely to get __13__ . As you look around the __14__ , it is difficult to know what people are thinking. Some are __15__ thinking “those Muslims come here and look what they do\\\" but they __16__ understand we condemn （谴责） this like everyone else.\\nWhoever did this didn't __17__ about who was killed or whether they were Christian or Muslim. They just had no respect __18__ human life at all. We all travel around London and we use public transport. We have as much fear as anyone else about __19__ in something. But in the coming days, everyone is going to have to work together and keep calm. We will look out for each other and that's how we. will __20__ this difficulty.\", \"options\": {\"1\": {\"A\": \"buried\", \"B\": \"hung\", \"C\": \"hidden\", \"D\": \"sunk\"}, \"2\": {\"A\": \"tell about\", \"B\": \"talk over\", \"C\": \"think out\", \"D\": \"Speak of\"}, \"3\": {\"A\": \"to carry on\", \"B\": \"were carried out\", \"C\": \"to carry out\", \"D\": \"were carried on\"}, \"4\": {\"A\": \"different\", \"B\": \"difficult\", \"C\": \"easy\", \"D\": \"interesting\"}, \"5\": {\"A\": \"putting on\", \"B\": \"dressing\", \"C\": \"wearing\", \"D\": \"having on\"}, \"6\": {\"A\": \"unless\", \"B\": \"until\", \"C\": \"before\", \"D\": \"after\"}, \"7\": {\"A\": \"However\", \"B\": \"Thus\", \"C\": \"But\", \"D\": \"And\"}, \"8\": {\"A\": \"calm\", \"B\": \"noisy\", \"C\": \"quiet\", \"D\": \"cheerful\"}, \"9\": {\"A\": \"in a way\", \"B\": \"in one way\", \"C\": \"in no way\", \"D\": \"in any way\"}, \"10\": {\"A\": \"looks\", \"B\": \"opinions\", \"C\": \"ideas\", \"D\": \"experiences\"}, \"11\": {\"A\": \"which\", \"B\": \"that\", \"C\": \"who\", \"D\": \"whom\"}, \"12\": {\"A\": \"itself\", \"B\": \"himself\", \"C\": \"myself\", \"D\": \"oneself\"}, \"13\": {\"A\": \"better\", \"B\": \"worse\", \"C\": \"more\", \"D\": \"less\"}, \"14\": {\"A\": \"carriage\", \"B\": \"bus\", \"C\": \"train\", \"D\": \"taxi\"}, \"15\": {\"A\": \"surely\", \"B\": \"certainly\", \"C\": \"probably\", \"D\": \"hopefully\"}, \"16\": {\"A\": \"have to\", \"B\": \"might\", \"C\": \"are able to\", \"D\": \"may\"}, \"17\": {\"A\": \"ask\", \"B\": \"hear\", \"C\": \"know\", \"D\": \"care\"}, \"18\": {\"A\": \"with\", \"B\": \"of\", \"C\": \"for\", \"D\": \"to\"}, \"19\": {\"A\": \"keeping up\", \"B\": \"being caught up\", \"C\": \"catching up\", \"D\": \"being kept up with\"}, \"20\": {\"A\": \"get away\", \"B\": \"get off\", \"C\": \"get out\", \"D\": \"get through\"}}}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "composition": [{
                            "id": 74,
                            "score": 5,
                            "category": "composition",
                            "getScore": "",
                            "right_ans": "Nowadays, human-to-human communication problems and social chaos are all related to speech. Sometimes, speaking is like sharp swords that can hurt people, while sometimes, it can help comfort people. As an old saying goes, “One word can cause the nation to prosper; one word can cause it to perish.” Speaking affects everything from individuals to nations even to the world. Speaking is like breathing that affects our lives. Then how can we make speaking improve our lives rather than drive our lives?\nFirst of all, we should learn. Most of us are willing to seek various ways to improve our speaking skills, such as reading books or participating in training courses. What’s more, we should practice speaking in all situations. Only in this way, can we improve our speaking skills. Apart from learning, practicing, it is more important to speak from the bottom of the heart. After all, speaking is closely related to our knowledge and mind.\nAll in one word, only by improving our speaking ability, can we benefit from it during the rest of our life and finally we'll see that it is rewarding.",
                            "isObjective": false,
                            "topic_and_stem": "{\"title\": \"For this part，you are allowed 30 minutes to write a short essay onthe importance of speaking ability and how to develop it.You should write at least 120 words but no more than180 words.\"}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "translation": [{
                            "id": 12,
                            "score": 5,
                            "category": "translation",
                            "getScore": "",
                            "right_ans": "Huashan(Mount Hua) is situated in Huayin City, 120 kilometers away from Xi'an. It ispart of the Qinling Mountains, which divides not only Southern and NorthernShaanxi, but also South and North China. Unlike Taishan, which became a popularplace of pilgrimage, Huashan was not well visited in the past because it is dangerousfor the climbers to reach its summit. Huashan was also an important place frequentedby immortality seekers, as many herbs grow there especially some rare ones. Sincethe installation of the cable cars in the 1990s, the number of visitors hasincreased significantly.",
                            "isObjective": false,
                            "topic_and_stem": "{\"title\": \"华山位于华阴市，距西安120公里。华山是秦岭的一部分，秦岭不仅分隔陕南与陕北，也分隔华南与华北。与从前人们常去朝拜的泰山不同，华山过去很少有人光临，因为上山的道路极其危险。然而，希望长寿的人却经常上山，因为山上生长着许多药草，特别是一些稀有的药草。自上世纪90年代安装缆车以来，参观人数大大增加。（145字）\"}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "multi_select": [{
                            "id": 63,
                            "score": 5,
                            "category": "multi_select",
                            "getScore": "",
                            "right_ans": "A,B,C",
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"人的身高可能为____\", \"options\": {\"A\": \"100 cm\", \"B\": \"200 cm\", \"C\": \"150 cm\", \"D\": \"5000 cm\"}}",
                            "knowledge_point": "人类知识",
                            "degree_of_difficulty": 0
                        }],
                        "text_mistake": [{
                            "id": 65,
                            "score": 5,
                            "category": "text_mistake",
                            "getScore": "",
                            "right_ans": {
                                "1": "第一个in改为on。",
                                "2": "Listening后加to。",
                                "3": "sudden改为suddenly。",
                                "4": "is改为was。",
                                "5": "去掉to",
                                "6": "come前加had。",
                                "7": "what改为that。",
                                "8": "去掉at。",
                                "9": "sur-prised改为surprtse。",
                                "10": ".away改为to。"
                            },
                            "isObjective": false,
                            "topic_and_stem": "{\"title\": \"Late in the afternoon of Saturday in July, a boy-herder was enjoying listening the click of the rails nearby when sudden black clouds began to-gather. Now the boy is driving the goats to a cave. When he reached to the cave, he saw that many wild goats come already. To catch them all, he gave the wild goats the grass what he had brought for his own goats at outside. When the storm was over, to his surprised, he saw his own goats had died, and the wild goats had run away the hills and the woods.\"}",
                            "knowledge_point": "英语小练习",
                            "degree_of_difficulty": 0
                        }],
                        "single_select": [{
                            "id": 7,
                            "score": 5,
                            "category": "single_select",
                            "getScore": "",
                            "right_ans": "C",
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"三角形的内角和为____\", \"options\": {\"A\": 6, \"B\": 7, \"C\": 8, \"D\": 9}}",
                            "knowledge_point": "for 循环",
                            "degree_of_difficulty": 0
                        }],
                        "true_or_false": [{
                            "id": 52,
                            "score": 5,
                            "category": "true_or_false",
                            "getScore": "",
                            "right_ans": "true",
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"胸外心脏按压的主要目的是造成胸腔内压的变化，促使血液循环。\"}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "read_understand": [{
                            "id": 16,
                            "score": 5,
                            "category": "read_understand",
                            "getScore": "",
                            "right_ans": {
                                "1": "C",
                                "2": "C",
                                "3": "C",
                                "4": "A",
                                "5": "A"
                            },
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"Normally a student must attend a certain number of courses in order to graduate, and each course which he attends gives him a credit which he may count towards a degree,In many American universities the total work for a degree consists of thirty-six courses each lasting for one semester. A typical course consists of three classes per week for fifteen weeks;while attending a university a student will probably attend four or five courses during each semester. Normally a student. Would expect to take four years attending two semesters each year. It is possible to spread the period of work for the degree over a longer period. It is also possible for a student to move between one university and another during his degree course,though this is not in fact done as a regular practice.\\nFor very course that the follows a student is given a grade,which is recorded, and the record is availablefor the student to show to prospective employers.All this imposes a constant pressure and strain of work,but in spite of this some students still find time for great activity in student affairs.Elections to positions in student organizations arouse much enthusiasm.The effective work of maintaining discipline is usually performed by students who advise the academic authorities.Any student who is thought to have broken therules,for example,by cheating his to appear before a student court.With the enormous numbers of students, the operation of the system does involve a certain amount of activity.A student who has held one of these positions of authority is much respected and it will be of benefit to him later in his career.\", \"options\": {\"1\": {\"title\": \"Normally a student would at least attend ______ classes each week.\", \"options\": {\"A\": \"36\", \"B\": \"20\", \"C\": \"12\", \"D\": \"15\"}}, \"2\": {\"title\": \"According to the first paragraph an American student is allowed ______.\", \"options\": {\"A\": \"to live in a different university\", \"B\": \"to live at home and drive to classes\", \"C\": \"to take a particular course in a different university\", \"D\": \"to get two degrees from two different universities\"}}, \"3\": {\"title\": \"America university students are usually under pressure of work because__________\", \"options\": {\"A\": \"they have to observe university discipline\", \"B\": \"they are heavily involved in student affairs\", \"C\": \"their academic performance will affect their future careers\", \"D\": \"they want to run for positions of authority\"}}, \"4\": {\"title\": \"Some students are enthusiastic for positions in student organizations probably because______\", \"options\": {\"A\": \"such positions help them get better jobs\", \"B\": \"they hate the constant pressure and strain of their study\", \"C\": \"they will then be able to stay longer in the university\", \"D\": \"such positions are usually well paid\"}}, \"5\": {\"title\": \"The student organizations seem to be effective in ___________\", \"options\": {\"A\": \"ensuring that the students observe university regulations\", \"B\": \"dealing with the academic affairs of the university\", \"C\": \"evaluating students’ performance by bringing them before a court\", \"D\": \"keeping up the students’ enthusiasm for social activities\"}}}}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "choose_fill_blank": [{
                            "id": 15,
                            "score": 5,
                            "category": "choose_fill_blank",
                            "getScore": "",
                            "right_ans": {
                                "1": "K",
                                "2": "C",
                                "3": "M",
                                "4": "E",
                                "5": "H",
                                "6": "A",
                                "7": "N",
                                "8": "I",
                                "9": "F",
                                "10": "L"
                            },
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"Did Sarah Josepha Hale write “Mary’s Little Lamb,” the eternal nursery rhyme (儿歌) about girl named Mary with a stubborn lamb? This is still disputed, but it’s clear that the woman __26__ for writing it was one of America’s most fascinating __27__ . In honor of the poem publication on May 24,1830, here’s more about the __28__ author’s life.\\nHale wasn’t just a writer, she was also a __29__ social advocate, and she was particularly __30__ with an ideal New England, which she associated with abundant Thanksgiving meals that she claimed had “a deep moral influence,” she began a nationwide __31__ to have a national holiday declared that would bring families together while celebrating the __32__ festivals. In 1863, after 17 years of advocacy including letters to five presidents, Hale got it. President Abraham Lincoln during the Civil War, issued a __33__ setting aside the last Thursday in November for the holiday.\\nThe true authorship of “Mary’s Little Lamb” is disputed. According to New England Historical Society, Hale wrote only one part of the poem, but claimed authorship. Regardless of the author, it seems that the poem was __34__by a real event. When young Mary Sawyer was followed to school by a lamb in 1816, it caused some problems. A bystander named John Roulstone wrote a poem about the event, then, at some point, Hale herself seems to have helped write it. However, if a 1916 piece by her great-niece is to be trusted, Hale claimed for the __35__of her life that “Some other people pretended that someone else wrote the poem”.\", \"options\": {\"A\": \"campaign\", \"B\": \"career\", \"C\": \"characters\", \"D\": \"features\", \"E\": \"fierce\", \"F\": \"inspired\", \"G\": \"latter\", \"H\": \"obsessed\", \"I\": \"proclamation\", \"J\": \"rectified\", \"K\": \"reputed\", \"L\": \"rest\", \"M\": \"supposed\", \"N\": \"traditional\", \"O\": \"versatile\"}}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "seven_selected_five": [{
                            "id": 56,
                            "score": 5,
                            "category": "seven_selected_five",
                            "getScore": "",
                            "right_ans": {
                                "1": "C",
                                "2": "B",
                                "3": "D",
                                "4": "E",
                                "5": "A"
                            },
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"Color is  ____ fundamental in ____  home design—something ____  you’ll ____  always have in ____ every room. A grasp of\", \"options\": {\"A\": \"While all of them are useful\", \"B\": \"Whatever you’re looking for\", \"C\": \"If you’re experimenting with a color\", \"D\": \"Small color choices are the ones we’re most familiar with\", \"E\": \"It’s not really a good idea to use too many\", \"F\": \"So it pays to be sure, because you want to get it\", \"G\": \"Color choices in this range are a step up from the\"}}",
                            "knowledge_point": "生物知识点",
                            "degree_of_difficulty": 0
                        }],
                        "non_directional_select": [{
                            "id": 22,
                            "score": 5,
                            "category": "non_directional_select",
                            "getScore": "",
                            "right_ans": "A,B,C",
                            "isObjective": true,
                            "topic_and_stem": "{\"title\": \"人的身高可能为____\", \"options\": {\"A\": \"100 cm\", \"B\": \"200 cm\", \"C\": \"150 cm\", \"D\": \"5000 cm\"}}",
                            "knowledge_point": "人类知识",
                            "degree_of_difficulty": 0
                        }]
                    }
                    this.allmsg = arr;

                    //单选题的处理
                    for (let i = 0; i < this.allmsg.single_select.length; i++) {
                        this.dan[i] = ''
                        this.allmsg.single_select[i].topic_and_stem = JSON.parse(this.allmsg.single_select[i]
                            .topic_and_stem)
                    }
                    // 多选题的处理
                    for (let i = 0; i < this.allmsg.multi_select.length; i++) {
                        this.duo[i] = [];

                        this.allmsg.multi_select[i].topic_and_stem = JSON.parse(this.allmsg.multi_select[i]
                            .topic_and_stem)
                    }
                    // 七选五的处理          
                    let l = [];
                    for (let i = 0; i < this.allmsg.seven_selected_five.length; i++) {
                        l[i] = [];
                        for (let g = 0; g < 5; g++) {
                            l[i][g] = ""
                        }
                        this.qi = l;
                        this.allmsg.seven_selected_five[i].topic_and_stem = JSON.parse(this.allmsg
                            .seven_selected_five[i].topic_and_stem)
                    }
                    // 判断的处理                
                    for (let i = 0; i < this.allmsg.true_or_false.length; i++) {
                        this.pan[i] = '';
                        this.allmsg.true_or_false[i].topic_and_stem = JSON.parse(this.allmsg.true_or_false[i]
                            .topic_and_stem)
                    }
                    // 选词填空的处理

                    for (let i = 0; i < this.allmsg.choose_fill_blank.length; i++) {
                        this.xuan[i] = [];
                        this.allmsg.choose_fill_blank[i].topic_and_stem = JSON.parse(this.allmsg.choose_fill_blank[
                            i].topic_and_stem);
                        for (let n = 0; n < 10; n++) {
                            this.xuan[i][n] = '';
                        }
                    }
                    // 完型填空的处理

                    for (let i = 0; i < this.allmsg.fill_blank.length; i++) {
                        this.allmsg.fill_blank[i].topic_and_stem = JSON.parse(this.allmsg.fill_blank[i]
                            .topic_and_stem);
                        this.wan.length = 20;
                        for (let i = 0; i < 20; i++) {
                            this.wan[i] = ''
                        }
                        //  for(k in this.allmsg.fill_blank[i].topic_and_stem.options){
                        //     this.wan[wx]='';
                        //      wx++;
                        //      console.log(k)
                        //  }
                    }

                    // 听力的处理
                    for (let i = 0; i < this.allmsg.listening.length; i++) {
                        this.ting[i] = [];
                        let k;
                        let m = 0;
                        this.allmsg.listening[i].topic_and_stem = JSON.parse(this.allmsg.listening[i]
                            .topic_and_stem)
                        for (k in this.allmsg.listening[i].topic_and_stem.title) {
                            this.ting[i][m] = '';
                            m++;
                        }
                    }
                    console.log(this.ting)
                    // 非定向选择的处理
                    for (let i = 0; i < this.allmsg.non_directional_select.length; i++) {
                        this.fei[i] = ''
                        this.allmsg.non_directional_select[i].topic_and_stem = JSON.parse(this.allmsg
                            .non_directional_select[i].topic_and_stem)
                    }

                    // 阅读理解的处理

                    for (let i = 0; i < this.allmsg.read_understand.length; i++) {
                        this.yuedu[i] = [];
                        let m = 0;
                        this.allmsg.read_understand[i].topic_and_stem = JSON.parse(this.allmsg.read_understand[i]
                            .topic_and_stem)
                        for (let k in this.allmsg.read_understand[i].topic_and_stem[1]) {

                            this.yuedu[i][m] = ''
                            m++;
                        }

                    }


                    // 填空题的处理
                    for (let i = 0; i < this.allmsg.fill.length; i++) {
                        this.tian[i] = [];
                        for (let g = 0; g < this.allmsg.fill[i].space_num; g++) {
                            this.tian[i][g] = ''
                        }
                        this.allmsg.fill[i].topic_and_stem = JSON.parse(this.allmsg.fill[i].topic_and_stem)
                    }


                    // 短文改错的处理
                    for (let i = 0; i < this.allmsg.text_mistake.length; i++) {
                        this.dwgc[i] = '';
                        this.allmsg.text_mistake[i].topic_and_stem = JSON.parse(this.allmsg.text_mistake[i]
                            .topic_and_stem)
                    }

                    // 翻译的处理
                    for (let i = 0; i < this.allmsg.translation.length; i++) {
                        this.allmsg.translation[i].topic_and_stem = JSON.parse(this.allmsg.translation[i]
                            .topic_and_stem)
                    }

                    //  作文的处理
                    for (let i = 0; i < this.allmsg.composition.length; i++) {
                        this.allmsg.composition[i].topic_and_stem = JSON.parse(this.allmsg.composition[i]
                            .topic_and_stem)
                    }

                    this.mp3 = this.allmsg.listening[0].topic_and_stem.accessory
                    console.log(this.allmsg)
                } else {
                    console.log(msg)
                    this.$message.error("获取内容失败！")
                }
            },
            // 开始考试
            starexam: function () {

                let that = this;
                this.ishidden = true;
                setInterval(function () {
                    that.alltime = that.alltime - 1;
                    that.fen = parseInt(that.alltime / 60);
                    that.miao = that.alltime % 60;
                    if (that.alltime == 0) {
                        this.$message.success("考试结束！")
                        this.$router.push("testpage");
                    }
                }, 1000)

            },
            //   提交考试
            async tijiao() {
                // 提交考试答案汇总！
                let solve = {}
                // 单选的处理
                solve.single_select = []
                for (let x = 0; x < this.allmsg.single_select.length; x++) {
                    let y = {}
                    y.id = this.allmsg.single_select[x].id;
                    y.ans = this.dan[x];
                    solve.single_select.push(y)
                }
                // 多选题的处理
                solve.multi_select = []
                for (let x = 0; x < this.allmsg.multi_select.length; x++) {
                    let y = {}
                    y.id = this.allmsg.multi_select[x].id;
                    y.ans = this.duo[x];
                    solve.multi_select.push(y)
                }
                // 七选五的处理
                solve.seven_selected_five = []
                for (let x = 0; x < this.allmsg.seven_selected_five.length; x++) {
                    let y = {}
                    y.id = this.allmsg.multi_select[x].id;
                    y.ans = {};
                    for (let g = 0; g < this.qi[x].length; g++) {
                        y.ans[g + 1] = this.qi[x][g]
                    }
                    solve.seven_selected_five.push(y)
                }
                // 判断题的处理
                solve.true_or_false = []
                for (let x = 0; x < this.allmsg.true_or_false.length; x++) {
                    let y = {}
                    y.id = this.allmsg.true_or_false[x].id;
                    y.ans = this.pan[x];
                    solve.true_or_false.push(y)
                }
                // 填空的处理
                solve.fill = []
                for (let x = 0; x < this.allmsg.fill.length; x++) {
                    let y = {}
                    y.id = this.allmsg.fill[x].id;
                    y.ans = {};
                    for (let g = 0; g < this.tian[x].length; g++) {
                        y.ans[g + 1] = this.tian[x][g]
                    }
                    solve.fill.push(y)
                }
                // 选词填空的处理
                solve.choose_fill_blank = []
                for (let x = 0; x < this.allmsg.choose_fill_blank.length; x++) {
                    let y = {}
                    y.id = this.allmsg.choose_fill_blank[x].id;
                    y.ans = {};
                    for (let g = 0; g < this.xuan[x].length; g++) {
                        y.ans[g + 1] = this.xuan[x][g]
                    }
                    solve.choose_fill_blank.push(y)
                }
                // 完形填空的处理
                solve.fill_blank = []
                for (let x = 0; x < this.allmsg.fill_blank.length; x++) {
                    let y = {}
                    y.id = this.allmsg.fill_blank[x].id;
                    y.ans = this.wan;
                    solve.fill_blank.push(y)
                }
                // 听力的处理
                solve.listening = []
                for (let x = 0; x < this.allmsg.listening.length; x++) {
                    let y = {}
                    y.id = this.allmsg.listening[x].id;
                    y.ans = {};
                    for (let g = 0; g < this.ting[x].length; g++) {
                        y.ans[g + 1] = this.ting[x][g]
                    }
                    solve.listening.push(y)
                }

                // 非定向选择的处理
                solve.non_directional_select = []
                for (let x = 0; x < this.allmsg.non_directional_select.length; x++) {
                    let y = {}
                    y.id = this.allmsg.non_directional_select[x].id;
                    y.ans = this.fei[x];
                    solve.non_directional_select.push(y)
                }
                // 阅读理解的处理
                solve.read_understand = []
                for (let x = 0; x < this.allmsg.read_understand.length; x++) {
                    let y = {}
                    y.id = this.allmsg.read_understand[x].id;
                    y.ans = [];
                    y.ans = this.yuedu[x]
                    solve.read_understand.push(y)
                }
                // 短文改错的处理
                solve.text_mistake = []
                for (let x = 0; x < this.allmsg.text_mistake.length; x++) {
                    let y = {}
                    y.id = this.allmsg.text_mistake[x].id;
                    y.ans = {};
                    y.ans[x] = this.dwgc[x]

                    solve.text_mistake.push(y)
                }
                // 翻译的处理
                solve.translation = []
                for (let x = 0; x < this.allmsg.translation.length; x++) {
                    let y = {}
                    y.id = this.allmsg.translation[x].id;
                    y.ans = '';
                    y.ans = this.fy;
                    solve.translation.push(y)
                }
                // 作文的处理
                solve.composition = []
                for (let x = 0; x < this.allmsg.composition.length; x++) {
                    let y = {}
                    y.id = this.allmsg.composition[x].id;
                    y.ans = '';
                    y.ans = this.zw;
                    solve.composition.push(y)
                }
                // 首先是id
                var storage = window.sessionStorage;
                let examid = storage.getItem("examid");
                //  其次是数据
                let za = JSON.stringify(solve);
                console.log(za)
                // 最后的工作交互
                let msg = await this.$http.post('exam/' + examid, {
                    candidate_id: examid,
                    answer: za
                });
                if (msg.data.code == 0) {
                    this.$message.success("考试结束！")
                    this.$router.push("testpage");
                } else {
                    this.$message.error("提交失败！")
                }


            },
            // 放弃考试
            fangqi: function () {
                this.$router.push("testpage")
            },
            // 绑定
            updateView(e) {
                this.$forceUpdate()
            },
            qian: function (es) {

                this.tab = parseInt(es);

            }
        }
    }
</script>
<style lang="less" scoped>
    * {
        box-sizing: border-box;
    }

    .hidden {
        display: none;
    }

    .ingcon {
        width: 1400px;
        min-height: 400px;
        margin: 0 auto;
        margin-top: 100px;
        z-index: -1;
    }

    .con-left {
        width: 300px;
        float: left;
        //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
        min-height: 400px;
        margin-right: 50px;
    }

    .tt {
        display: none;
    }

    .con-center {
        width: 700px;
        min-height: 400px;
        float: left;
        //box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
        margin-right: 50px;
        position: relative;

    }

    .con-right {
        width: 300px;
        float: left;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15) !important;
        min-height: 400px;
        padding: 5px;

    }

    .headp {
        text-align: center;
        font-weight: 600;
    }

    // 剩余时间
    .time {
        font-weight: 600;
        position: absolute;
        right: 0;
        top: -22px;
    }

    // 开始考试
    .star {
        position: absolute;
        left: 160px;
        top: -42px;
    }

    // 结束考试
    .end {
        position: absolute;
        left: 0px;
        top: -42px;
    }

    // 题目类型
    .qc {
        padding: 0;
        list-style: none;
        width: 100%;
    }

    .qc li {
        height: 60px;
        width: 100%;
        font-weight: 600;
        text-align: center;
        line-height: 60px;
        border: 1px solid lightblue;
        cursor: pointer;
    }

    // 左部分被选中
    .lactive {
        color: white;
        background: black;
    }

    // 题的css
    .zong {
        padding: 10px;
        font-weight: 600;
        border-bottom: 1px solid lightgray;
    }

    .xuanze {
        width: 100%;
        margin-bottom: 10px;
    }

    // 翻译的大盒子
</style>