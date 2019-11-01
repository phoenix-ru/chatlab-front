# DS Lab 09 Report

> Simple web chat for DS Lab


Github (front-end): https://github.com/phoenix-ru/chatlab-front\
Github (back-end): https://github.com/reshreshus/chatlab

## Step 0
![](https://i.postimg.cc/Qd1pqLmf/image.png)
> Screen shows the beginning of the dialog (as I forgot to do it earlier)

```
rs0:PRIMARY> rs.status()
{
        "set" : "rs0",
        "date" : ISODate("2019-11-01T20:36:19.173Z"),
        "myState" : 1,
        "term" : NumberLong(2),
        "syncingTo" : "",
        "syncSourceHost" : "",
        "syncSourceId" : -1,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1572657689, 1),
                        "t" : NumberLong(2)
                },
                "lastCommittedWallTime" : ISODate("2019-11-01T20:36:37.443Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1572657689, 1),
                        "t" : NumberLong(2)
                },
                "readConcernMajorityWallTime" : ISODate("2019-11-01T20:36:37.443Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1572657689, 1),
                        "t" : NumberLong(2)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1572657689, 1),
                        "t" : NumberLong(2)
                },
                "lastAppliedWallTime" : ISODate("2019-11-01T20:36:37.443Z"),
                "lastDurableWallTime" : ISODate("2019-11-01T20:36:37.443Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1572639827, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1572639827, 1),
        "electionCandidateMetrics" : {
                "lastElectionReason" : "stepUpRequestSkipDryRun",
                "lastElectionDate" : ISODate("2019-11-01T20:33:03.434Z"),
                "termAtElection" : NumberLong(2),
                "lastCommittedOpTimeAtElection" : {
                        "ts" : Timestamp(1572629746, 1),
                        "t" : NumberLong(1)
                },
                "lastSeenOpTimeAtElection" : {
                        "ts" : Timestamp(1572657689, 1),
                        "t" : NumberLong(1)
                },
                "numVotesNeeded" : 2,
                "priorityAtElection" : 1,
                "electionTimeoutMillis" : NumberLong(10000),
                "priorPrimaryMemberId" : 0,
                "numCatchUpOps" : NumberLong(27017),
                "newTermStartDate" : ISODate("2019-11-01T20:33:03.821Z"),
                "wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T20:33:03.819Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mmongo0.domain.net:27017",
                        "ip" : "172.31.16.236",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 10116,
                        "optime" : {
                                "ts" : Timestamp(1572657689, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572657689, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:36:20Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:24:27Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:36:20.535Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:36:20.097Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mmongo1.domain.net:27017",
                        "syncSourceHost" : "mmongo1.domain.net:27017",
                        "syncSourceId" : 1,
                        "infoMessage" : "",
                        "configVersion" : 1
                },
                {
                        "_id" : 1,
                        "name" : "mmongo1.domain.net:27017",
                        "ip" : "172.31.14.218",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 10220,
                        "optime" : {
                                "ts" : Timestamp(1572657689, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:36:20Z"),
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "electionTime" : Timestamp(1572653838, 1),
                        "electionDate" : ISODate("2019-11-01T20:33:03Z"),
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 2,
                        "name" : "mmongo2.domain.net:27017",
                        "ip" : "172.31.18.96",
                        "health" : 0,
                        "state" : 8,
                        "stateStr" : "SECONDARY",
                        "uptime" : 10116,
                        "optime" : {
                                "ts" : Timestamp(1572655133, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572655133, 1),
                                "t" : NumberLong(2)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:24:23Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:24:23Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:24:35.425Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:24:36.525Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mmongo1.domain.net:27017",
                        "syncSourceHost" : "mmongo1.domain.net:27017",
                        "syncSourceId" : 1,
                        "infoMessage" : "",
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1572657689, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1572657689, 1)
}
```
```
rs0:PRIMARY> rs.config()
{
        "_id" : "rs0",
        "version" : 1,
        "protocolVersion" : NumberLong(1),
        "writeConcernMajorityJournalDefault" : true,
        "members" : [
                {
                        "_id" : 0,
                        "host" : "mmongo0.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 1,
                        "host" : "mmongo1.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 2,
                        "host" : "mmongo2.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                }
        ],
        "settings" : {
                "chainingAllowed" : true,
                "heartbeatIntervalMillis" : 2000,
                "heartbeatTimeoutSecs" : 10,
                "electionTimeoutMillis" : 10000,
                "catchUpTimeoutMillis" : -1,
                "catchUpTakeoverDelayMillis" : 30000,
                "getLastErrorModes" : {

                },
                "getLastErrorDefaults" : {
                        "w" : 1,
                        "wtimeout" : 0
                },
                "replicaSetId" : ObjectId("5dba09ea5e1224dffb5de8a6")
        }
}
```

## Step 1
![](https://i.postimg.cc/fb3QPK3q/image.png)
```
rs0:PRIMARY> rs.status()
{
        "set" : "rs0",
        "date" : ISODate("2019-11-01T20:48:49.811Z"),
        "myState" : 1,
        "term" : NumberLong(5),
        "syncingTo" : "",
        "syncSourceHost" : "",
        "syncSourceId" : -1,
        "heartbeatIntervalMillis" : NumberLong(2000),
        "majorityVoteCount" : 2,
        "writeMajorityCount" : 2,
        "optimes" : {
                "lastCommittedOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "lastCommittedWallTime" : ISODate("2019-11-01T20:48:48.147Z"),
                "readConcernMajorityOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "readConcernMajorityWallTime" : ISODate("2019-11-01T20:48:48.147Z"),
                "appliedOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "durableOpTime" : {
                        "ts" : Timestamp(1572640892, 1),
                        "t" : NumberLong(5)
                },
                "lastAppliedWallTime" : ISODate("2019-11-01T20:48:48.147Z"),
                "lastDurableWallTime" : ISODate("2019-11-01T20:48:48.147Z")
        },
        "lastStableRecoveryTimestamp" : Timestamp(1572660862, 1),
        "lastStableCheckpointTimestamp" : Timestamp(1572660862, 1),
        "electionCandidateMetrics" : {
                "lastElectionReason" : "electionTimeout",
                "lastElectionDate" : ISODate("2019-11-01T20:49:31.424Z"),
                "termAtElection" : NumberLong(5),
                "lastCommittedOpTimeAtElection" : {
                        "ts" : Timestamp(1572660777, 1),
                        "t" : NumberLong(4)
                },
                "lastSeenOpTimeAtElection" : {
                        "ts" : Timestamp(1572660787, 1),
                        "t" : NumberLong(4)
                },
                "numVotesNeeded" : 2,
                "priorityAtElection" : 1,
                "electionTimeoutMillis" : NumberLong(10000),
                "numCatchUpOps" : NumberLong(27017),
                "newTermStartDate" : ISODate("2019-11-01T20:48:32.194Z"),
                "wMajorityWriteAvailabilityDate" : ISODate("2019-11-01T20:48:31.997Z")
        },
        "members" : [
                {
                        "_id" : 0,
                        "name" : "mmongo0.domain.net:27017",
                        "ip" : "172.31.16.236",
                        "health" : 1,
                        "state" : 1,
                        "stateStr" : "PRIMARY",
                        "uptime" : 11143,
                        "optime" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:48:48.147Z"),
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "could not find member to sync from",
                        "electionTime" : Timestamp(1572660777, 1),
                        "electionDate" : ISODate("2019-11-01T20:40:11Z"),
                        "configVersion" : 1,
                        "self" : true,
                        "lastHeartbeatMessage" : ""
                },
                {
                        "_id" : 1,
                        "name" : "mmongo1.domain.net:27017",
                        "ip" : "172.31.14.218",
                        "health" : 0,
                        "state" : 8,
                        "stateStr" : "(not reachable/healthy)",
                        "uptime" : 0,
                        "optime" : {
                                "ts" : Timestamp(0, 0),
                                "t" : NumberLong(-1)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(0, 0),
                                "t" : NumberLong(-1)
                        },
                        "optimeDate" : ISODate("1970-01-01T00:00:00Z"),
                        "optimeDurableDate" : ISODate("1970-01-01T00:00:00Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:41:33.849Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:33:48.979Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "Couldn't get a connection within the time limit",
                        "syncingTo" : "",
                        "syncSourceHost" : "",
                        "syncSourceId" : -1,
                        "infoMessage" : "",
                        "configVersion" : -1
                },
                {
                        "_id" : 2,
                        "name" : "mmongo2.domain.net:27017",
                        "ip" : "172.31.18.96",
                        "health" : 1,
                        "state" : 2,
                        "stateStr" : "SECONDARY",
                        "uptime" : 96,
                        "optime" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDurable" : {
                                "ts" : Timestamp(1572640892, 1),
                                "t" : NumberLong(5)
                        },
                        "optimeDate" : ISODate("2019-11-01T20:48:20Z"),
                        "optimeDurableDate" : ISODate("2019-11-01T20:41:32Z"),
                        "lastHeartbeat" : ISODate("2019-11-01T20:41:37.997Z"),
                        "lastHeartbeatRecv" : ISODate("2019-11-01T20:41:38.755Z"),
                        "pingMs" : NumberLong(1),
                        "lastHeartbeatMessage" : "",
                        "syncingTo" : "mmongo0.domain.net:27017",
                        "syncSourceHost" : "mmongo0.domain.net:27017",
                        "syncSourceId" : 0,
                        "infoMessage" : "",
                        "configVersion" : 1
                }
        ],
        "ok" : 1,
        "$clusterTime" : {
                "clusterTime" : Timestamp(1572640892, 1),
                "signature" : {
                        "hash" : BinData(0,"AAAAAAAAAAAAAAAAAAAAAAAAAAA="),
                        "keyId" : NumberLong(0)
                }
        },
        "operationTime" : Timestamp(1572640892, 1)
}
```
```
rs0:PRIMARY> rs.config()
{
        "_id" : "rs0",
        "version" : 1,
        "protocolVersion" : NumberLong(1),
        "writeConcernMajorityJournalDefault" : true,
        "members" : [
                {
                        "_id" : 0,
                        "host" : "mmongo0.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 1,
                        "host" : "mmongo1.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                },
                {
                        "_id" : 2,
                        "host" : "mmongo2.domain.net:27017",
                        "arbiterOnly" : false,
                        "buildIndexes" : true,
                        "hidden" : false,
                        "priority" : 1,
                        "tags" : {

                        },
                        "slaveDelay" : NumberLong(0),
                        "votes" : 1
                }
        ],
        "settings" : {
                "chainingAllowed" : true,
                "heartbeatIntervalMillis" : 2000,
                "heartbeatTimeoutSecs" : 10,
                "electionTimeoutMillis" : 10000,
                "catchUpTimeoutMillis" : -1,
                "catchUpTakeoverDelayMillis" : 30000,
                "getLastErrorModes" : {

                },
                "getLastErrorDefaults" : {
                        "w" : 1,
                        "wtimeout" : 0
                },
                "replicaSetId" : ObjectId("5dba09ea5e1224dffb5de8a6")
        }
}
```


## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
