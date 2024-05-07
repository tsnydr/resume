<template>
  <div class="m-3 pt-3">
    <HistoryItem>
      <template #company>Block, Inc (fka Square)</template>
      <template #title>Tech Lead, Data Governance</template>
      <template #start>2023</template>
      <template #end>present</template>
      <template #description>
        <HistoryDescription>
          I am currently building a comprehensive data discovery and lineage tool to catalog all of Block's data assets across various Kafka brokers, Snowflake, Databricks, Business Intelligence tools, and other platforms.
        </HistoryDescription>
        <HistoryDescription>
          By exporting assets and edges to AWS S3 from their source platforms, ingesting to Elasticsearch, and exposing search via a simple REST API, I have made cross-platform lineage traversal and search possible at lighting-fast speeds. Cross-platform lineage enables propagation of semantic types and other governance metadata tags from Kafka Topic to Data Warehouse to Dashboard.
        </HistoryDescription>
        <HistoryDescription>
          This app is built with Nuxt, a Vue meta-framework that makes Typescript on the the frontend and backend easy. I have built a number of apps in our data ecosystem using a similar tech stack, which allows for rapid prototyping of MVPs, and then painless deployment and scaling with Terraform and Kubernetes.
        </HistoryDescription>
      </template>
    </HistoryItem>

    <HistoryItem>
      <template #title>Senior Software Engineer</template>
      <template #start>2019</template>
      <template #end>2023</template>
      <template #description>
        <HistoryDescription>
          I built Squarewave, a dead-simple, user-friendly, SQL-only ETL tool to allow any data citizen to deploy SQL transformations from a web browser. Built with Python, Flask, and Vue on the frontend, Squarewave parses SQL, dynamically generates DAGs from parsed sources and targets, and syncs them to Airflow. Squarewave has hundreds of users and over 5,000 daily jobs, democratizing data at enterprise scale.
        </HistoryDescription>
        <HistoryDescription>
          While Squarewave has democratized data transformations it also improves data quality with guard rails like automatic dependency status detection and Peer Review, encourages the adoption of software engineering principles like Unit Testing, and makes configuring alerting and anomaly detection as easy as flipping a switch.
        </HistoryDescription>
        <HistoryDescription>
          I recently migrated Squarewave, our Airflow clusters, and other internal apps from the on-prem datacenter to Block's Kubernetes infrastructure in AWS. Airflow notably is now running on 15 autoscaling clusters in production.
        </HistoryDescription>
      </template>
    </HistoryItem>

    <HistoryItem>
      <template #title>Business Intelligence</template>
      <template #start>2016</template>
      <template #end>2019</template>
      <template #description>
        <HistoryDescription>
          I scaled Tableau to zero and Looker to over 3,000 weekly users and more than 300 LookML devs. At the time this was the largest and most complex Looker instance, and most likely still is.
        </HistoryDescription>
        <HistoryDescription>
          To facilitate migrating from on-prem Vertica to Snowflake I built a tool to automatically convert ~90% of SQL from one platform to the other. Using the same tool and Liquid for dynamic LookML, we were able to have a nearly seamless transition that was transparent to most end-users.
          I presented this work on stage at Looker's Join conference in 2018.
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
          I scaled up Tableau Server across operations teams, and implemented the first ETL orchestration system to maintain high quality reporting during and after the monolith decomposition.
        </HistoryDescription>
      </template>
    </HistoryItem>
  </div>
</template>
