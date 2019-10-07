// counter.js

export default {
  template: `
    <div>
      <span class="count">{{ count }}</span>
      <button @click="increment">Increment</button>
      <p class="moreThan8TotalHits" v-if="totalHits >= 8">データは8件以上です</p>
      <p class="lessThan8TotalHits" v-else>データは8件未満です</p>
      <p class="job-companyName">{{ job.companyName }}</p>
    </div>
  `,

  data () {
    return {
      count: 0,
      totalHits: 2,
      job: {
        companyName: "",
        siteName: "an"
      }
    }
  },

  methods: {
    increment () {
      this.count++
    }
  }
}
