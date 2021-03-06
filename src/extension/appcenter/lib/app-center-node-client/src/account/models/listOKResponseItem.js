/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a ListOKResponseItem.
 */
class ListOKResponseItem {
  /**
   * Create a ListOKResponseItem.
   * @member {string} [displayName] The display name of the organization
   * @member {string} [name] The slug name of the organization
   * @member {string} [origin] The creation origin of this organization.
   * Possible values include: 'mobile-center', 'hockeyapp'
   */
  constructor() {
  }

  /**
   * Defines the metadata of ListOKResponseItem
   *
   * @returns {object} metadata of ListOKResponseItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ListOKResponseItem',
      type: {
        name: 'Composite',
        className: 'ListOKResponseItem',
        modelProperties: {
          displayName: {
            required: false,
            serializedName: 'display_name',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ListOKResponseItem;
