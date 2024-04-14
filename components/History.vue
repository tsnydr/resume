<template>
  <div class="pe-5">
    <HistoryItem>
      <template #company>Block, Inc (fka Square)</template>
      <template #title>Tech Lead, Data Governance</template>
      <template #start>2023</template>
      <template #end>present</template>
      <template #description>
        <HistoryDescription>
          I am currently building a data discovery and lineage tool to catalog all of Block's data assets across various Kafkas brokers, Snowflake, Databricks, etc.
          By exporting assets to S3, ingesting to Elasticsearch, and exposing search via a simple API, I have enabled lighting fast search and cross-platform lineage traversal.
          Cross-platform lineage enables propagation of semantic types and governance metadata from Topic to Data Warehouse to Dashboard.
        </HistoryDescription>
      </template>
    </HistoryItem>
    
    <HistoryItem>
      <template #title>Senior Software Engineer</template>
      <template #start>2019</template>
      <template #end>2023</template>
      <template #description>
        <HistoryDescription>
          I built Squarewave, a dead-simple, user friendly, SQL only ETL tool to enable any data citizen to deploy SQL transformations.
          Built with Python, Flask, and Vue on the frontend, Squarewave parses SQL, dynamically generates DAGs, and syncs them to Airflow.
          Squarewave has hundreds of users and over 5,000 daily jobs, democtratizing data at enterpise scale.
        </HistoryDescription>
        <HistoryDescription>
          I migrated Squarewave, our Airflow clusters, and other apps from the datacenter to Block's kubernetes infrastructure in AWS.
          Airflow notably is now running on 15 autoscaling clusters in production.
        </HistoryDescription>
      </template>
    </HistoryItem>

    <HistoryItem>
      <template #title>Business Intelligence</template>
      <template #start>2016</template>
      <template #end>2019</template>
      <template #description>
        <HistoryDescription>
          I scaled Tableau to zero and Looker to over 3,000 weekly users and over 300 LookML devs. At the time this was the largest and most complex Looker instance, and most likely still is.
        </HistoryDescription>
        <HistoryDescription>
          To facilitate migrating from Vertica to Snowflake I built a tool to automatically convert ~90% of SQL from one platform to the other.
          Using the same tool and Liquid to enable dynamic LookML, we were able to have a nearly seemless transition.
          I presented this work on state at Looker's Join conference in 2018.
        </HistoryDescription>
      </template>
    </HistoryItem>

    <HistoryItem>
      <template #company>Instacart</template>
      <template #title>Senior Data Analyst</template>
      <template #start>2015</template>
      <template #end>2016</template>
      <template #description>
        <HistoryDescription>
          As the first data hire at this start up in a rapid growth stage, I wore many hats.
          I scaled up Tableau Server across operations teams, and implemented the first ETL orchestation system to maintain high quality reporting during and after the monolith decomposition.
        </HistoryDescription>        
      </template>
    </HistoryItem>
  </div>
</template>
