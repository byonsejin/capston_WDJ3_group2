<template>
    <v-container grid-list-md>
        <v-layout justify-cetner row>
            <v-flex xs12>
                <!-- <h1>id {{$route.params.id}} 입니다</h1> -->
                <h1 class="font-weight-black text-center">{{product.store_name}}</h1>
                <v-img class="img" :src="product.image"></v-img>
            </v-flex>
            <v-flex xs12>
                <!-- <v-data-table
                    :headers="headers"
                    :items="reviews"
                    :loading="loading">
                <template slot="items" slot-scope="props">
                    <td :class="header[1].class">{{props.item.title}}</td>
                    <td :class="header[2].class">{{props.item._user ? props.item._user.id : '손님'}}</td>
                </template>
                </v-data-table> -->
                <v-data-table
                :headers="headers"
                :items="reviews"
                class="elevation-1"
                sort-by="review_content"
                >
                <template v-slot:top>
                    <v-toolbar flat color="white">
                    <v-toolbar-title>리뷰</v-toolbar-title>
                    <v-divider
                        class="mx-4"
                        inset
                        vertical
                    ></v-divider>
                    <v-spacer></v-spacer>
                    <v-dialog v-model="dialog" max-width="500px">
                        <template v-slot:activator="{ on }">
                        <v-btn color="green" dark class="mb-2" v-on="on">리뷰작성</v-btn>
                        </template>
                        <v-card>
                        <v-card-title>
                            <span class="headline">리뷰작성</span>
                        </v-card-title>            
                        <v-card-text>
                            <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.review_title" label="제목"></v-text-field>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" sm="6" md="4">
                                <v-text-field v-model="editedItem.review_content" label="내용"></v-text-field>
                                </v-col>
                            </v-row>
                            </v-container>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green darken-1" text @click="close">Cancel</v-btn>
                            <v-btn color="green darken-1" text @click="save">Save</v-btn>
                        </v-card-actions>
                        </v-card>
                    </v-dialog>
                    </v-toolbar>
                </template>
                <template v-slot:item.actions="{ item }">
                    <v-icon
                    small
                    class="mr-2"
                    @click="editItem(item)"
                    >
                    mdi-pencil
                    </v-icon>
                    <v-icon
                    small
                    @click="deleteItem(item)"
                    >
                    mdi-delete
                    </v-icon>
                </template>
                <template v-slot:no-data>
                    <v-btn color="green" @click="initialize">Reset</v-btn>
                </template>
                </v-data-table>
            </v-flex>  
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'

export default {
//   data () {
//     return {
//       reviews: [],
//       headers: [
//         { text: '제목', value: 'review_title', sortable: true },
//         { text: '글쓴이', value: 'user_id2', sortable: false },
//       ],
//       loading: false,
//       product:''
//     }
//   },
//   // ..
//   methods: {
//     // ..
//     list () {
//       if (this.loading) return
//       this.loading = true
//       this.$axios.get('/static/reviews.json')
//         .then((res) => {
//           this.reivew = res.data.reviews;
//           console.log(this.reviews);
//         })
//         .catch((e) => {
//           this.pop(e.message, 'error')
//           this.loading = false
//         })
//     },
//     id2date (val) {
//       if (!val) return '잘못된 시간 정보'
//       return new Date(parseInt(val.substring(0, 8), 16) * 1000).toLocaleString()
//     }
//   },
  created:function(){
         axios.get('/static/products.json')
         .then((res)=>{
            this.product=res.data.products.filter(data=> data.id == this.$route.params.id)[0];
            this.product.image='/'+this.product.image;
            console.log(res);
         })
         .catch((err)=>{
            console.log(err);
         });
   },
    data: () => ({
    product:'',
    dialog: false,
    headers: [
      {
        text: '제목',
        align: 'start',
        sortable: false,
        value: 'review_title',
      },
      { text: '내용', value: 'review_content' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    reviews: [],
    editedIndex: -1,
    editedItem: {
      review_title: '',
      review_content: '',
    },
    defaultItem: {
      review_title: '',
      review_content: '',
    }
  }),
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
  },

  methods: {
    initialize () {
      this.reviews = [
        {
          review_title: '맛있어요',
          review_content: '어쩌구저쩌규ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ',
        },
        {
          review_title: '맛없음',
          review_content: 'ㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎㅎ',
        },
        {
          review_title: '달콤함바그b',
          review_content: 'ㅇㅇㅇㅇㅇㅇㅇㅇ',
        },
        {
          review_title: '매콤함바그 맛있음',
          review_content: 'ㅇㅇㅇㅇㅇㅇㅇ',
        },
        {
          review_title: '매콤함바그 맛있음',
          review_content: 'ㅇㅇㅇㅇㅇㅇㅇ',
        },
        {
          review_title: '맛있어요',
          review_content: '어쩌구저쩌규ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ',
        },
        {
          review_title: '달콤함바그b',
          review_content: 'ㅇㅇㅇㅇㅇㅇㅇㅇ',
        },
        {
          review_title: '맛있어요',
          review_content: '어쩌구저쩌규ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ',
        },
        {
          review_title: '맛있어요',
          review_content: '어쩌구저쩌규ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ',
        },
        {
          review_title: '맛있어요',
          review_content: '어쩌구저쩌규ㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌㅌ',
        },
      ]
    },

    editItem (item) {
      this.editedIndex = this.reviews.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.reviews.indexOf(item)
      confirm('Are you sure you want to delete this item?') && this.reviews.splice(index, 1)
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.reviews[this.editedIndex], this.editedItem)
      } else {
        this.reviews.push(this.editedItem)
      }
      this.close()
    }
  },
}
</script>

<style>
.img {
	/* width: 240px; */
	height: 550px;
	object-fit: cover;
    margin-bottom: 4em;
}    
</style>