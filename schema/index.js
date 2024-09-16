// const schemaValidator={
//   type: "object",
//   properties: {
//     context: {
//       type: "object",
//       properties: {
//         domain: { type: "string" },
//         location: {
//           type: "object",
//           properties: {
//             city: {
//               type: "object",
//               properties: {
//                 code: { type: "string" }
//               },
//               required: ["code"]
//             },
//             country: {
//               type: "object",
//               properties: {
//                 code: { type: "string" }
//               },
//               required: ["code"]
//             }
//           },
//           required: ["city", "country"]
//         },
//         action: { type: "string" },
//         version: { type: "string" },
//         bap_id: { type: "string" },
//         bap_uri: { type: "string", format: "uri" },
//         bpp_id: { type: "string" },
//         bpp_uri: { type: "string", format: "uri" },
//         transaction_id: { type: "string" },
//         message_id: { type: "string" },
//         timestamp: { type: "string", format: "date-time" },
//         ttl: { type: "string" }
//       },
//       required: [
//         "domain", "location", "action", "version", "bap_id",
//         "bap_uri", "bpp_id", "bpp_uri", "transaction_id",
//         "message_id", "timestamp", "ttl"
//       ]
//     },
//     message: {
//       type: "object",
//       properties: {
//         order: {
//           type: "object",
//           properties: {
//             provider: {
//               type: "object",
//               properties: {
//                 id: { type: "string" }
//               },
//               required: ["id"]
//             },
//             items: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   id: { type: "string" },
//                   fulfillment_ids: {
//                     type: "array",
//                     items: { type: "string" }
//                   },
//                   quantity: {
//                     type: "object",
//                     properties: {
//                       selected: {
//                         type: "object",
//                         properties: {
//                           count: { type: "integer" }
//                         },
//                         required: ["count"]
//                       }
//                     },
//                     required: ["selected"]
//                   }
//                 },
//                 required: ["id", "fulfillment_ids", "quantity"]
//               }
//             },
//             billing: {
//               type: "object",
//               properties: {
//                 name: { type: "string" },
//                 address: { type: "string" },
//                 state: {
//                   type: "object",
//                   properties: {
//                     name: { type: "string" }
//                   },
//                   required: ["name"]
//                 },
//                 city: {
//                   type: "object",
//                   properties: {
//                     name: { "type": "string" }
//                   },
//                   required: ["name"]
//                 },
//                 tax_id: { type: "string" },
//                 email: { type: "string", format: "email" },
//                 phone: { type: "string" }
//               },
//               required: [
//                 "name", "address", "state", "city", "tax_id",
//                 "email", "phone"
//               ]
//             },
//             fulfillments: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   id: { "type": "string" },
//                   type: { "type": "string" },
//                   stops: {
//                     type: "array",
//                     items: {
//                       type: "object",
//                       properties: {
//                         type: { "type": "string" },
//                         time: {
//                           type: "object",
//                           properties: {
//                             label: { "type": "string" },
//                             range: {
//                               type: "object",
//                               properties: {
//                                 start: { "type": "string", "format": "date-time" },
//                                 end: { "type": "string", "format": "date-time" }
//                               },
//                               required: ["start", "end"]
//                             }
//                           },
//                           required: ["label", "range"]
//                         },
//                         duration: { "type": "string" },
//                         schedule: {
//                           type: "object",
//                           properties: {
//                             frequency: { "type": "string" }
//                           },
//                           required: ["frequency"]
//                         }
//                       },
//                       required: ["type", "time", "duration", "schedule"]
//                     }
//                   },
//                   tags: {
//                     type: "array",
//                     items: {
//                       type: "object",
//                       properties: {
//                         descriptor: {
//                           type: "object",
//                           properties: {
//                             code: { "type": "string" }
//                           },
//                           required: ["code"]
//                         },
//                         list: {
//                           type: "array",
//                           items: {
//                             type: "object",
//                             properties: {
//                               descriptor: {
//                                 type: "object",
//                                 properties: {
//                                   code: { type: "string" }
//                                 },
//                                 required: ["code"]
//                               },
//                               value: { type: "string" }
//                             },
//                             required: ["descriptor", "value"]
//                           }
//                         }
//                       },
//                       "required": ["descriptor", "list"]
//                     }
//                   }
//                 },
//                 required: ["id", "type", "stops", "tags"]
//               }
//             },
//             payments: {
//               type: "array",
//               items: {
//                 type: "object",
//                 properties: {
//                   type: { type: "string" },
//                   collected_by: { type: "string" }
//                 },
//                 required: ["type", "collected_by"]
//               }
//             }
//           },
//           required: [
//             "provider", "items", "billing", "fulfillments", "payments"
//           ]
//         }
//       },
//       required: ["order"]
//     }
//   },
//   required: ["context", "message"]
// }

module.exports = {
  type: "object",
  properties: {
    context: {
      type: "object",
      properties: {
        domain: { type: "string" },
        location: {
          type: "object",
          properties: {
            city: {
              type: "object",
              properties: {
                code: { type: "string" }
              },
              required: ["code"]
            },
            country: {
              type: "object",
              properties: {
                code: { type: "string" }
              },
              required: ["code"]
            }
          },
          required: ["city", "country"]
        },
        action: { type: "string" },
        version: { type: "string" },
        bap_id: { type: "string" },
        bap_uri: { type: "string", format: "uri" },
        bpp_id: { type: "string" },
        bpp_uri: { type: "string", format: "uri" },
        transaction_id: { type: "string" },
        message_id: { type: "string" },
        timestamp: { type: "string", format: "date-time" },
        ttl: { type: "string" }
      },
      required: [
        "domain", "location", "action", "version", "bap_id",
        "bap_uri", "bpp_id", "bpp_uri", "transaction_id",
        "message_id", "timestamp", "ttl"
      ]
    },
    message: {
      type: "object",
      properties: {
        order: {
          type: "object",
          properties: {
            provider: {
              type: "object",
              properties: {
                id: { type: "string" }
              },
              required: ["id"]
            },
            items: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { type: "string" },
                  fulfillment_ids: {
                    type: "array",
                    items: { type: "string" }
                  },
                  quantity: {
                    type: "object",
                    properties: {
                      selected: {
                        type: "object",
                        properties: {
                          count: { type: "integer" }
                        },
                        required: ["count"]
                      }
                    },
                    required: ["selected"]
                  }
                },
                required: ["id", "fulfillment_ids", "quantity"]
              }
            },
            billing: {
              type: "object",
              properties: {
                name: { type: "string" },
                address: { type: "string" },
                state: {
                  type: "object",
                  properties: {
                    name: { type: "string" }
                  },
                  required: ["name"]
                },
                city: {
                  type: "object",
                  properties: {
                    name: { "type": "string" }
                  },
                  required: ["name"]
                },
                tax_id: { type: "string" },
                email: { type: "string", format: "email" },
                phone: { type: "string" }
              },
              required: [
                "name", "address", "state", "city", "tax_id",
                "email", "phone"
              ]
            },
            fulfillments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  id: { "type": "string" },
                  type: { "type": "string" },
                  stops: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        type: { "type": "string" },
                        time: {
                          type: "object",
                          properties: {
                            label: { "type": "string" },
                            range: {
                              type: "object",
                              properties: {
                                start: { "type": "string", "format": "date-time" },
                                end: { "type": "string", "format": "date-time" }
                              },
                              required: ["start", "end"]
                            }
                          },
                          required: ["label", "range"]
                        },
                        duration: { "type": "string" },
                        schedule: {
                          type: "object",
                          properties: {
                            frequency: { "type": "string" }
                          },
                          required: ["frequency"]
                        }
                      },
                      required: ["type", "time", "duration", "schedule"]
                    }
                  },
                  tags: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        descriptor: {
                          type: "object",
                          properties: {
                            code: { "type": "string" }
                          },
                          required: ["code"]
                        },
                        list: {
                          type: "array",
                          items: {
                            type: "object",
                            properties: {
                              descriptor: {
                                type: "object",
                                properties: {
                                  code: { type: "string" }
                                },
                                required: ["code"]
                              },
                              value: { type: "string" }
                            },
                            required: ["descriptor", "value"]
                          }
                        }
                      },
                      "required": ["descriptor", "list"]
                    }
                  }
                },
                required: ["id", "type", "stops", "tags"]
              }
            },
            payments: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  type: { type: "string" },
                  collected_by: { type: "string" }
                },
                required: ["type", "collected_by"]
              }
            }
          },
          required: [
            "provider", "items", "billing", "fulfillments", "payments"
          ]
        }
      },
      required: ["order"]
    }
  },
  required: ["context", "message"]
}
